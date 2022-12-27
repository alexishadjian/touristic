jQuery(document).ready(function($){

    /*--------------------------------------------------------------
    Display bottom navigation
    --------------------------------------------------------------*/

    $(".mobile-container").on('scroll', function() {

        if ($(".mobile-container").scrollTop() > 100 ) { 
            $(".bottom-nav").addClass('active');
    
        } else if ($(".mobile-container").scrollTop() < 10 )  { 
            $(".bottom-nav").removeClass('active');
        }

    });
    
    /*--------------------------------------------------------------
    Pop up
    --------------------------------------------------------------*/ 
    
    //Show pop up
    setTimeout(function() {
        $("#popup").addClass("active");
        $('.mobile-container').addClass("scroll");
    }, 3000);
        
    // Hide pop up when press escape
    $(document).keydown(function (e) {
        if (e.keyCode == 27) {
            $("#popup").removeClass("active");
            $('.mobile-container').removeClass("scroll");
        }
    });

    // Hide pop up when click on cross
    $("#popup span").on('click', function() {
        $("#popup").removeClass("active");
        $('.mobile-container').removeClass("scroll");
    });

    /*--------------------------------------------------------------
    Slider
    --------------------------------------------------------------*/ 

    if ($('#slider .slider').length > 0) {
        $('#slider .slider').slick({
            infinite: true,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
            centerMode: true,
        });

    }

    /*--------------------------------------------------------------
    Menu mobile
    --------------------------------------------------------------*/

    $('.bottom-nav__btn').click(function() {
        $('.burger-nav').toggleClass("active");
        $('.bottom-nav__btn span').toggleClass("active");
    });

    /*--------------------------------------------------------------
    Map
    --------------------------------------------------------------*/ 

    var map = L.map('leaflet-map').setView([-16.689399012363168, 179.21954740180354], 10);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);


    var marker = L.marker([-16.689399012363168, 179.21954740180354]).addTo(map);

    marker.bindPopup("<b>Îles Fidji, Océanie</b><br>Des îles perdues").openPopup();

    var circle = L.circle([-16.705446272887762, 179.3042419660778], {
        color: 'blue',
        fillColor: '#4169e1',
        fillOpacity: 0.4,
        radius: 1500
    }).addTo(map);

    var circle2 = L.circle([-16.692635835436633, 179.179756462032], {
        color: 'blue',
        fillColor: '#4169e1',
        fillOpacity: 0.4,
        radius: 1500
    }).addTo(map);

    var circle3 = L.circle([-16.785998765660732, 179.32399815449182], {
        color: 'blue',
        fillColor: '#4169e1',
        fillOpacity: 0.4,
        radius: 1500
    }).addTo(map);

    var circle4 = L.circle([-16.791326254853992, 179.09121412362742], {
        color: 'blue',
        fillColor: '#4169e1',
        fillOpacity: 0.4,
        radius: 1500
    }).addTo(map);
    
});


/*--------------------------------------------------------------
Météo
--------------------------------------------------------------*/ 

document.addEventListener('DOMContentLoaded', () => {

    let url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Fidji?unitGroup=metric&key=WALJ29LGHSBP7G8C9VW6M5B68&contentType=json";
  
    fetch(url)
      .then( response => {
          return response.json();
        }
      )
      .then(data => {
        console.log(data)

        // Clear icons class
        document.querySelector('.weather span').removeAttribute('class'); 

        // Current informations
        document.querySelector('.weather .weather__current .temp').innerHTML = data.currentConditions.temp.toFixed(0) + '°';
        document.querySelector('.weather .weather__current .place').innerHTML = data.resolvedAddress;
        document.querySelector('.weather .weather__current .desc').innerHTML = data.days[0].conditions;
        document.querySelector('.weather .weather__current span').classList.add(data.days[0].icon);

        // Forecast informations
        document.querySelector('.weather .weather__forecast__single.first .temp').innerHTML = data.days[1].temp.toFixed(0) + '°';
        document.querySelector('.weather .weather__forecast__single.second .temp').innerHTML = data.days[2].temp.toFixed(0) + '°';
        document.querySelector('.weather .weather__forecast__single.third .temp').innerHTML = data.days[3].temp.toFixed(0) + '°';
        document.querySelector('.weather .weather__forecast__single.first span ').classList.add(data.days[1].icon);
        document.querySelector('.weather .weather__forecast__single.second span ').classList.add(data.days[2].icon);
        document.querySelector('.weather .weather__forecast__single.third span ').classList.add(data.days[3].icon);
    });


    let day = new Date().getDay();

    let tomorrow = '';
    let aftertomorrow = '';
    let afteraftertomorrow = '';

    switch  (day) {
        case 0:
            day = "Sunday";
            tomorrow = "Monday";
            aftertomorrow = "Thuesday";
            afteraftertomorrow = "Wednesday";
            break;
        case 1:
            day = "Monday";
            tomorrow = "Thuesday";
            aftertomorrow = "Wednesday";
            afteraftertomorrow = "Thursday";
            break;
        case 2:
            day = "Thuesday";
            tomorrow = "Wednesday";
            aftertomorrow = "Thursday";
            afteraftertomorrow = "Friday";
            break;
        case 3:
            day = "Wednesday";
            tomorrow = "Thursday";
            aftertomorrow = "Friday";
            afteraftertomorrow = "Saturday";
            break;
        case 4:
            day = "Thursday";
            tomorrow = "Friday";
            aftertomorrow = "Saturday";
            afteraftertomorrow = "Sunday";
            break;
        case 5:
            day = "Friday";
            tomorrow = "Saturday";
            aftertomorrow = "Sunday";
            afteraftertomorrow = "Monday";
            break;
        case 6:
            day = "Saturday";
            tomorrow = "Sunday";
            aftertomorrow = "Monday";
            afteraftertomorrow = "Thuesday";
            break;
    }

    document.querySelector('.weather .weather__forecast__single.first .day').innerHTML = tomorrow;
    document.querySelector('.weather .weather__forecast__single.second .day').innerHTML = aftertomorrow;
    document.querySelector('.weather .weather__forecast__single.third .day').innerHTML = afteraftertomorrow;


})
