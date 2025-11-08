'use strict';

const axios = require('axios');

const arianee = {};

const API_URL = 'https://audemarspiguet-hackaton.api.pre-production.arianee.com';
const API_KEY = 'dbd0346c-6e30-4cea-ad3c-f4aeb3eb6327';

const USER_PRODUCTS = {
    0: ['F48337-GBYUSC-3867'],
    1: ['F48337-GBYUSC-3867'],
};

async function fetchProductDetails(productId) {
    try {
        const response = await axios.get(
            `${API_URL}/productManagement/product/${productId}`,
            {
                headers: {
                    'x-api-key': API_KEY
                }
            }
        );
        
        return response.data.data;
        
    } catch (error) {
        console.error(`[Arianee] Error fetching product ${productId}:`, error.message);
        return null;
    }
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

arianee.fetchUserNFTs = async function (uid) {
    const productIds = USER_PRODUCTS[uid];
    
    if (!productIds || productIds.length === 0) {
        return [];
    }
    
    try {
        const promises = productIds.map(async (productId) => {
            const product = await fetchProductDetails(productId);
            
            if (!product) return null;
            
            return {
                id: product.productId,
                image: product.content.medias[0].url.replace(/&amp;/g, '&'),
                title: `${product.content.name} ${product.content.model}`,
                description: product.content.description.split('\n\n')[0],
                url: `/nft/${product.productId}`
            };
        });
        
        const results = await Promise.all(promises);
        return results.filter(nft => nft !== null);
        
    } catch (error) {
        console.error('[Arianee] Error:', error);
        return [];
    }
};

arianee.fetchNFTById = async function (nftId, uid) {
    try {
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
        
    } catch (error) {
        console.error('[Arianee] Error:', error);
        return null;
    }
};

module.exports = arianee;
