let lastScrollTop = 0;
const threshold = 80;

$(window).on('scroll', () => {
    const scrollTop = $(window).scrollTop();
    let showHeader = scrollTop < threshold;

    global.$header.toggleClass('header--collapsed', !showHeader);
});
