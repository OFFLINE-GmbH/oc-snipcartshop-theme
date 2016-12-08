var attachFastClick = require('fastclick');

$(function () {
    global.$body = $('body');
    global.$hamburger = $('.hamburger');
    global.$siteWrapper = $('.site-wrapper');

    setTimeout(() => {
        // Snipcart needs a few moments to populate the
        // summaries with content. To prevent the flash
        // of the empty item, we'll just show it delayed.
        $('.deferred-item').addClass('deferred-item--visible');
    }, 1000);

    require('./modules/slideNav.js');

    attachFastClick(document.body);
});