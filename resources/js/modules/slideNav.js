$('<div class="slide-nav-overlay">').on('click', e => {
    global.$body.removeClass('slide-nav-is-open');
}).appendTo(global.$siteWrapper);

global.$hamburger.on('click', e => {
    global.$body.addClass('slide-nav-is-open');
});
