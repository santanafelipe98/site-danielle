const slideControls = $('.dot');
let currentSlide    = 0;
let onHover         = false;

function updateTestimonials() {
    const testimonials = $('.testimonialWrapper');
    
    testimonials.each(function(i, testimonial) {
        let translateX = 100 * (i - currentSlide);

        $(testimonial).css('transform', `translateX(calc(${translateX}% + 10px))`);
    });

    let activeDot = $(slideControls.get(currentSlide));

    slideControls.removeClass('active');
    activeDot.addClass('active');
}

function autoplaySlides(speed=5000) {
    setInterval(function() {
        if (currentSlide < slideControls.length - 1)
            currentSlide++;
        else
            currentSlide = 0;

        updateTestimonials();
    }, speed);
}


updateTestimonials();
autoplaySlides();

slideControls.on('click', function(e) {
    const el     = $(this);
    currentSlide = el.index();

    updateTestimonials();
});