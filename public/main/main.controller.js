
angular.module('mainPage').
    controller('mainPageController', function($scope, $location, NgMap){

    $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyAQG895e-uvGCZE2GSbwLWCIeqbyih9imI";
    //google map
    NgMap.getMap().then(function(map) {
        console.log(map.getCenter());
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);
    });

    //Parallax code
    var parallaxData = [{
        id: '#firstParallax',
        src: 'images/parallax.jpg'
    },{
        id: '#secondParallax',
        src: 'images/parallax2.jpg'
    },{
        id: '#thirdParallax',
        src: 'images/parallax.jpg'
    }];

    parallaxData.forEach(function(data){
        $(data.id).parallax({ imageSrc :data.src});

    });

    angular.element(document).ready(function () {
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
            $('.praise-text').css('padding-top',$('.praise-text').height()/3 );
            $('.praise-right').css('padding-top',$('.praise-text').height()/2 );
        }

    });

    //Scrolling
    var scrollTo = function(element){
        $('html, body').stop().animate({
            scrollTop: element.offset().top - $('.nav').height() + 10
        }, 'slow');
    };

    var element = $($location.search().scroll);
    if(element) {
        scrollTo(element);
    }



});