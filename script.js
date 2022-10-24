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


var mobyMenu = new Moby({
	breakpoint		 : 1024,
	enableEscape	 : true,
    menu             : $('#main-nav'),
	menuClass		 : 'right-side',
	mobyTrigger		 : $("#nav-btn"),
    onClose          : false,
    onOpen           : false,
	overlay			 : true,
	overlayClass 	 : 'dark',
    subMenuOpenIcon  : '<span>&#x25BC;</span>',
	subMenuCloseIcon : '<span>&#x25B2;</span>',
    template         : '<div class="moby-wrap"><div class="moby-close"><span class="moby-close-icon"></span> Close Menu</div><div class="moby-menu"></div></div>'
});