'use strict';

const display_NFTs = require('./NFTs');

const pluginCollection = {};

pluginCollection.addCollection = async function (data) {
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

pluginCollection.addCollectionCount = async function (data) {
    const User = require.main.require('./src/user');
    const profileUid = data.uid;
    
    let walletAddress;
    try {
        const Auth0 = require('nodebb-plugin-sso-auth0-publickey/library.js');
        walletAddress = Auth0 && Auth0.getPublicKey ? Auth0.getPublicKey(profileUid) : undefined;
    } catch (e) {
        walletAddress = undefined;
    }
    
    if (walletAddress) {
        const items = await display_NFTs.getItems(walletAddress);
        data.counts.collection = items.length;
    } else {
        data.counts.collection = 0;
    }
    
    return data;
};

pluginCollection.addRoutes = function (params) {
    const { router, middleware } = params;
    const hostHelpers = require.main.require('./src/routes/helpers');
    const User = require.main.require('./src/user');

    const accountMiddlewares = [
        middleware.exposeUid,
        middleware.canViewUsers,
        middleware.buildAccountData,
    ];

    const render = async function (req, res) {
        // const walletAddress = "0x766c409C2e8618fc570982b9acfF1E1c76a26201";

        const profileUid = res.locals.userData ? res.locals.userData.uid : req.uid;
        let walletAddress;
        try {
            const Auth0 = require('nodebb-plugin-sso-auth0-publickey/library.js');
            walletAddress = Auth0 && Auth0.getPublicKey ? Auth0.getPublicKey(profileUid) : undefined;
        } catch (e) {
            walletAddress = undefined;
        }
        console.log('[collection] walletAddress:', walletAddress, 'profileUid:', profileUid);
        const userData = await User.getUserData(profileUid);
        const isPublic = !userData.collectionPublic || userData.collectionPublic === '1';

        if (!isPublic && req.uid !== profileUid) {
            return res.status(403).render('403', { title: 'Private collection' });
        }

        const payload = Object.assign({}, res.locals.userData);
        payload.title = 'Collection';
        payload.items = walletAddress ? await display_NFTs.getItems(walletAddress) : [];
        payload.isPublic = isPublic;
        payload.isOwner = req.uid === profileUid;
        payload.uid = profileUid;
        payload.template = { 'account/collection': true };

        res.render('account/collection', payload);
    };

    hostHelpers.setupPageRoute(router, '/user/:userslug/collection', accountMiddlewares, render);
    
    router.post('/api/user/:uid/collection/visibility', middleware.authenticateRequest, async (req, res) => {
        const uid = parseInt(req.params.uid, 10);
        
        if (uid !== req.uid) {
            return res.status(403).json({ error: 'Forbidden' });
        }
        
        const isPublic = req.body.isPublic === true;
        await User.setUserField(uid, 'collectionPublic', isPublic ? '1' : '0');
        
        res.json({ success: true, isPublic });
    });
    
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
