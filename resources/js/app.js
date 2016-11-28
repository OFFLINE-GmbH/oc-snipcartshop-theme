var attachFastClick = require('fastclick');

$(function () {
    global.$body = $('body');

    setTimeout(() => {
        // SnipCart needs a few moments to populate the
        // badge with the item count. To prevent the flash
        // of the empty badge, we'll just show it delayed.
        $('.cart__badge').addClass('cart__badge--visible');
    }, 1000);

    attachFastClick(document.body);
});