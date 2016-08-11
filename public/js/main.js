/**
 * Created by nir on 8/7/16.
 */

var scrollTo =function(element){
    $('html, body').stop().animate({
        scrollTop: element.offset().top - $('.nav').height() + 10
    }, 'slow');
};

//Nav bar
$('.contact-link').click(function () {
    scrollTo($('.contact-content'));
});


$('.home-link').click(function(){
    scrollTo($('.carousel'));
});

$('.team-link').click(function(){
    scrollTo($('.team-container'));
})
//Center scissor connection
if($(window).width() > 1200) {
    $('.scissor-connection').css('margin-top', $('.praise-text').height() / 2 - $('.fa-scissors').height());
}
//Center praise text
$('.praise-text').css('padding-top',$('.praise-text').height()/5 );
if($(window).width() < 900){
    $('.praise-text').css('padding-top',$('.praise-text').height()/7 );
    $('.praise-right').css('padding-top',$('.praise-text').height()/4 );
}

if($(window).width() < 530){
    $('.praise-text').css('padding-top',$('.praise-text').height()/8 );
    $('.praise-right').css('padding-top',$('.praise-text').height()/5 );
}

//Google map config
function initMap() {
    var mapDiv = document.getElementById('map');
    var loc ={lat: 43.812050, lng: -79.482729};

    var map = new google.maps.Map(mapDiv, {
        center: loc,
        zoom: 17,
        styles:[
            {
                "featureType": "water",
                "stylers": [
                    {
                        "saturation": 43
                    },
                    {
                        "lightness": -11
                    },
                    {
                        "hue": "#0088ff"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "hue": "#ff0000"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 99
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#808080"
                    },
                    {
                        "lightness": 54
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ece2d9"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ccdca1"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#767676"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#b8cb93"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi.sports_complex",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi.medical",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            }
        ]
    });

    var market = new google.maps.Marker({
        position: loc,
        map: map,
        title: 'Zoola Salon'
    })


}


