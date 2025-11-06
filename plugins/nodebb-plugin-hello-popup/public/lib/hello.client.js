'use strict';

define('hello-popup/client', ['jquery'], function($) {
    console.log('[hello-popup] client JS loaded');

    const HelloPopup = {};

    HelloPopup.init = function() {
        console.log('[hello-popup] init called');
        $('body').css('border', '5px solid red'); // visual confirmation
    };

    return HelloPopup;
});
