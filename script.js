jQuery(document).ready(function($){

    if ($('#slider').length > 0) {
        $('#slider').slick({
            infinite: true,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
            responsive: [
                {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
                },
                {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                },
                },
            ],
        });

    }
    
});