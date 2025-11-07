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
    
    const render = function (req, res) {
        res.render('account/collection', {
            title: 'Collection',
            uid: req.uid,
            items: display_NFTs.getItems(req.uid)
        });
    };
    
    hostHelpers.setupPageRoute(router, '/user/:userslug/collection', accountMiddlewares, render);
    
    // Route pour les détails NFT
    const nftMiddlewares = [
        middleware.maintenanceMode,
        middleware.authenticateRequest,
        middleware.pluginHooks,
        middleware.pageView,
    ];
    
    const renderNFTDetail = async function (req, res) {
        const nftId = req.params.nftId;
        const nft = display_NFTs.getItemById(nftId);
        
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