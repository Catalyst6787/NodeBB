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
};

module.exports = pluginCollection;