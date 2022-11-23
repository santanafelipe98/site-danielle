$(function() {
    $('#customer_slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 12,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 10,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            },
        ]
    })

    new Splide('#main_slider', {
        type: 'loop',
        width: '100%',
        height: '100vh',
        pagination: true,
        perPage: 1,
        autoplay: true,
        speed: 3000
    }).mount();
})