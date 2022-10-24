jQuery(document).ready(function($){

    /*--------------------------------------------------------------
    Pop up
    --------------------------------------------------------------*/ 
    
    $("#popup").addClass("active");

    // Hide pop up when click outside
    $(document).mouseup(function (e) {
        if ($(e.target).closest("#container").length === 0) {
            $("#popup").removeClass("active");
        }
    });
        
    // Hide pop up when press escape
    $(document).keydown(function (e) {
        if (e.keyCode == 27) {
            $("#popup").removeClass("active");
        }
    });

    /*--------------------------------------------------------------
    Slider
    --------------------------------------------------------------*/ 

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

/*--------------------------------------------------------------
Menu mobile
--------------------------------------------------------------*/

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


/*--------------------------------------------------------------
Map
--------------------------------------------------------------*/ 

var map = L.map('map').setView([48.517526305997144, 2.6245277693024156], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var marker = L.marker([48.517526305997144, 2.6245277693024156]).addTo(map);

marker.bindPopup("<b>MyDigitalSchool</b><br>École du digital.").openPopup();



