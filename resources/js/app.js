var attachFastClick = require('fastclick');

$(function() {
    global.$body = $('body');
    global.$header = $('.header');

    // require('./modules/scrollHeader');

    attachFastClick(document.body);
});