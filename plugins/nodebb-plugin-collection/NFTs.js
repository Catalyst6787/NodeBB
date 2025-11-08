'use strict';

const arianee = require('./arianee');

const display_NFTs = {};

display_NFTs.getItems = async function (walletAddress) {
    return await arianee.fetchUserNFTs(walletAddress);
};

display_NFTs.getItemById = async function (nftId) {
    return await arianee.fetchNFTById(nftId);
};

module.exports = display_NFTs;
