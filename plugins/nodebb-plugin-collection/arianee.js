'use strict';

require('dotenv').config();
const axios = require('axios');

const arianee = {};

const API_URL = process.env.API_URL;
const API_KEY = process.env.ARIANEE_API_KEY;

async function getUserProductIds(walletAddress) {
    const qObj = {
        must: [{
            text: {
                path: ['owner'],
                query: walletAddress
            }
        }]
    };
    
    const params = new URLSearchParams({
        limit: '100',
        q: JSON.stringify(qObj),
        p: JSON.stringify({ productId: 1 })
    });

    const response = await axios.get(
        `${API_URL}/certificate/v2/search?${params.toString()}`,
        {
            headers: {
                'accept': 'application/json; charset=utf-8',
                'x-api-key': API_KEY
            }
        }
    );
    
    return response.data.map(cert => cert.productId);
}

async function fetchProductDetails(productId) {
    const response = await axios.get(
        `${API_URL}/productManagement/product/${productId}`,
        {
            headers: {
                'x-api-key': API_KEY
            }
        }
    );
    
    return response.data.data;
}

function extractAttributes(customAttributes) {
    const wantedTypes = [
        'MATERIAL', 'SIZE', 'WATER RESISTANCE', 'MECHANISM',
        'TOTAL DIAMETER', 'FREQUENCY', 'NUMBER OF JEWELS', 
        'POWER RESERVE', 'NUMBER OF PARTS', 'THICKNESS'
    ];
    
    return customAttributes
        .filter(attr => wantedTypes.includes(attr.type))
        .map(attr => ({
            label: attr.type,
            value: attr.value
        }));
}

arianee.fetchUserNFTs = async function (walletAddress) {
    const productIds = await getUserProductIds(walletAddress);
    
    const promises = productIds.map(async (productId) => {
        const product = await fetchProductDetails(productId);
        
        if (!product) return null;
        
        return {
            id: product.productId,
            image: product.content.medias[0].url.replace(/&amp;/g, '&'),
            title: `${product.content.name} ${product.content.model}`,
            description: product.content.description.split('\n\n')[0],
            url: `/nft/${product.productId}`,
            reference: product.content.technicalReference
        };
    });
    
    const results = await Promise.all(promises);
    const allNfts = results.filter(nft => nft !== null);
    
    const uniqueByReference = {};
    allNfts.forEach(nft => {
        if (!uniqueByReference[nft.reference]) {
            uniqueByReference[nft.reference] = nft;
        }
    });
    
    return Object.values(uniqueByReference);
};


arianee.fetchNFTById = async function (nftId) {
    const product = await fetchProductDetails(nftId);
    
    if (!product) return null;
    
    return {
        id: product.productId,
        image: product.content.medias[0].url.replace(/&amp;/g, '&'),
        title: `${product.content.name} ${product.content.model}`,
        description: product.content.description,
        attributes: extractAttributes(product.content.customAttributes),
        reference: product.content.technicalReference,
        serialNumber: product.content.serialnumber[0].value,
        url: `/nft/${product.productId}`
    };
};

module.exports = arianee;
