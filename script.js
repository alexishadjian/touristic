jQuery(document).ready(function($){

    /*--------------------------------------------------------------
    Pop up
    --------------------------------------------------------------*/ 
    
    //Show pop up
    setTimeout(function() {
        $("#popup").addClass("active");
        $('html, body').addClass("scroll");
    }, 1000);
        
    // Hide pop up when press escape
    $(document).keydown(function (e) {
        if (e.keyCode == 27) {
            $("#popup").removeClass("active");
            $('html, body').removeClass("scroll");
        }
    });

    // Hide pop up when click on cross
    $("#popup span").on('click', function() {
        $("#popup").removeClass("active");
        $('html, body').removeClass("scroll");
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

$('#nav-btn').click(function() {
    $('#main-nav').slideToggle();
    $('#nav-btn span').toggleClass("active");
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



