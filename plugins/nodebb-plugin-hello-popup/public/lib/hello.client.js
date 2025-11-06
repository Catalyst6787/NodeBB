'use strict';

define('hello-popup/client', ['jquery', 'core/user'], function($, User) {
	console.log('[hello-popup] client JS loaded');

	const HelloPopup = {};

	HelloPopup.init = function() {
		console.log('[hello-popup] init function called')
		$('body').css('background-color', '#ffdddd');
	};

	return HelloPopup;
})