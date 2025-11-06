'use strict ';

const plugin = {};

plugin.init = async function(params) {
	const { router, middleware, controllers } = params;

	console.log('[hello-popup] plugin loaded');
};

module.exports = plugin;
