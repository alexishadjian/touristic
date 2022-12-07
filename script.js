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
    })

    let daysNumber = new Date().getDay();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    days.forEach( ( day,index ) => {
        // Check if the index of day value is equal to the returned value of getDay()
        if ( index == daysNumber + 1 ) {
            document.querySelector('.weather .weather__forecast__single.first .day').innerHTML = day;
        } else if ( index == daysNumber + 2 ) {
            document.querySelector('.weather .weather__forecast__single.second .day').innerHTML = day;
        } else if ( index == daysNumber + 3 ) {
            document.querySelector('.weather .weather__forecast__single.third .day').innerHTML = day;
        }

    });

})
