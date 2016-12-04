var attachFastClick = require('fastclick');

$(function () {
    global.$body = $('body');

    setTimeout(() => {
        // Snipcart needs a few moments to populate the
        // summaries with content. To prevent the flash
        // of the empty item, we'll just show it delayed.
        $('.deferred-item').addClass('deferred-item--visible');
    }, 1000);

    attachFastClick(document.body);
});