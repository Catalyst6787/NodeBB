'use strict';

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

display_NFTs.getItems = function (uid) {
    return nftData;
};

display_NFTs.getItemById = function (id) {
    return nftData.find(nft => nft.id === id);
};

module.exports = display_NFTs;