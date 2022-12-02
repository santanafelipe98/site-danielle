const scroller  = $('.SectionScroller');
scroller.css('display', 'none');

$(window).on('scroll', function() {
    const MIN_TOP = 300;
    let scrollTop = $(window).scrollTop();

    if (scrollTop >= MIN_TOP) {
        scroller.show(500);
    } else {
        scroller.hide(500);
    }
});