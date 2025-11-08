'use strict';

const display_NFTs = require('./NFTs');

const pluginCollection = {};

pluginCollection.addCollection = function (data) {
    data.links.push({
        id: 'collection',
        route: 'collection',
        icon: 'fa-box',
        name: 'Collection',
        visibility: {
            self: true,
            other: true,
            moderator: true,
            globalMod: true,
            admin: true,
            canViewInfo: true,
        },
    });
    return data;
};

pluginCollection.addRoutes = function (params) {
    const { router, middleware } = params;
    const hostHelpers = require.main.require('./src/routes/helpers');

    const accountMiddlewares = [
        middleware.exposeUid,
        middleware.canViewUsers,
        middleware.buildAccountData,
    ];

    const render = async function (req, res) {
        const walletAddress = "0x766c409C2e8618fc570982b9acfF1E1c76a26201";

        res.render('account/collection', {
            title: 'Collection',
            items: await display_NFTs.getItems(walletAddress)
        });
    };

    hostHelpers.setupPageRoute(router, '/user/:userslug/collection', accountMiddlewares, render);

    const nftMiddlewares = [
        middleware.maintenanceMode,
        middleware.authenticateRequest,
        middleware.pluginHooks,
        middleware.pageView,
    ];

    const renderNFTDetail = async function (req, res) {
        const nft = await display_NFTs.getItemById(req.params.nftId);

        if (!nft) {
            return res.status(404).render('404', { title: 'NFT not found' });
        }

        res.render('nft_detail', {
            title: nft.title,
            nft: nft,
            breadcrumbs: []
        });
    };

    router.get('/nft/:nftId', middleware.buildHeader, nftMiddlewares, renderNFTDetail);
    router.get('/api/nft/:nftId', nftMiddlewares, renderNFTDetail);
};

module.exports = pluginCollection;
