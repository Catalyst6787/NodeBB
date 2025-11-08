'use strict';
const arianee = require('./arianee');
const display_NFTs = {};

const nftData = [
    {
        id: 'watch1',
        image: '/plugins/nodebb-plugin-collection/NFTs_images/watch1.jpg',
        title: 'Watch 1',
        description: 'Watch description',
        url: '/nft/watch1'
    },
    {
        id: 'watch2',
        image: '/plugins/nodebb-plugin-collection/NFTs_images/watch2.png',
        title: 'Watch 2',
        description: 'Watch 2 description',
        url: '/nft/watch2'
    }
];

display_NFTs.getItems = async function (uid) {
    try {
        const nfts = await arianee.fetchUserNFTs(uid);
        return nfts.length > 0 ? nfts : nftData;
    } catch (error) {
        console.error('[NFTs] Error:', error);
        return nftData;
    }
};

display_NFTs.getItemById = async function (id, uid) {
    try {
        const nft = await arianee.fetchNFTById(id, uid);
        return nft || nftData.find(n => n.id === id);
    } catch (error) {
        console.error('[NFTs] Error:', error);
        return nftData.find(n => n.id === id);
    }
};

module.exports = display_NFTs;