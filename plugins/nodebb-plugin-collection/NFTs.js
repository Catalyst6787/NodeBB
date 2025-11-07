'use strict';

const display_NFTs = {};

display_NFTs.getItems = function (uid) {
    return [
        {
            id: 'watch1',
            image: '/plugins/nodebb-plugin-collection/NFTs_images/watch1.jpg',
            title: 'Watch 1',
            description: 'Watch description'
        },
        {
            id: 'watch2',
            image: '/plugins/nodebb-plugin-collection/NFTs_images/watch2.png',
            title: 'Watch 2',
            description: 'Watch 2 description'
        }
    ];
};

module.exports = display_NFTs;