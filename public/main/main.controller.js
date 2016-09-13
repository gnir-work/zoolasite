
//Main page component
angular.module('mainPage').
    controller('mainPageController', function($scope, $location, NgMap, $http, $timeout){

    //Setting controller scope
    var controller = this;

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
        src: 'images/zoola_parallax2.jpg'
    },{
        id: '#secondParallax',
        src: 'images/zoola_inside.jpg'
    },{
        id: '#thirdParallax',
        src: 'images/parallax2.jpg'
    }];

    parallaxData.forEach(function(data){
        $(data.id).parallax({ imageSrc :data.src});

    });

    controller.test = 'test';
    controller.numOfCircles = 3;
    angular.element(document).ready(function () {
        //Center scissor connection
        if($(window).width() > 1200) {
            $('.scissor-connection').css('margin-top', $('.praise-text').height() / 2 - $('.fa-scissors').height());
            var circleWidth = $('.fa-circle').width();
            var numOfCircles = Math.round(($('.scissor-connection').width() - circleWidth * 6) / circleWidth) / 2;
            for(var i = 0; i < numOfCircles - 1; i++)
                $('.scissor-connection').append('<i class="fa fa-circle"> </i>')
            $('.scissor-connection').append('<i class="fa fa-circle last-dot"> </i>')
        }

        //Center praise text
        var margin = $('.praise-text').height() - $('.praise-text p').height();
        $('.praise-text').css('padding-top',margin/2 );

    });
    //Workers code
    var workersData = [{
        src: 'images/nir.jpg',
        description: 'Townscape anapaestic schizophyceous exopoditic preabstract lamest aoristically homostylism. Rehospitalize undeducible erasability nunciata unlethargical snakemouth dethrone norton. Ceding unmagnetized melinite unmediated overpunishment acanthopterygian decoloriser weaponless. Subgular scrabble insatiably sociological polymerize kathleen enquiry seadog. Pisay crimple screeching computerize maintop seer dagoba bifilar.'
    }, {
        src: 'images/gil.jpg',
        description: 'Townscape anapaestic schizophyceous exopoditic preabstract lamest aoristically homostylism. Rehospitalize undeducible erasability nunciata unlethargical snakemouth dethrone norton. Ceding unmagnetized melinite unmediated overpunishment acanthopterygian decoloriser weaponless. Subgular scrabble insatiably sociological polymerize kathleen enquiry seadog. Pisay crimple screeching computerize maintop seer dagoba bifilar.'
    }, {
        src: 'images/alina.jpg',
        description: 'Townscape anapaestic schizophyceous exopoditic preabstract lamest aoristically homostylism. Rehospitalize undeducible erasability nunciata unlethargical snakemouth dethrone norton. Ceding unmagnetized melinite unmediated overpunishment acanthopterygian decoloriser weaponless. Subgular scrabble insatiably sociological polymerize kathleen enquiry seadog. Pisay crimple screeching computerize maintop seer dagoba bifilar.'
    }];

    //Set workers layout
    var workersPerRow = 3;
    if(workersData.length % 3 == 1)
        workersPerRow = 2;
    console.log(workersPerRow);
    controller.workersRows = [];
    var tmpRow = [];

    for(var i = 1; i <= workersData.length; i++){
        tmpRow.push(workersData[i - 1]);
        if(i % workersPerRow == 0) {
            console.log(i);
            controller.workersRows.push(tmpRow);
            tmpRow = []
        }
    }

    controller.workersRows.push(tmpRow);



    //Scrolling
    var scrollTo = function(element){
        console.log('elements is + ' + element);
        $('html, body').stop().animate({
            scrollTop: element.offset().top - $('.nav').height() + 10
        }, 'slow');
    };

    var elementName = $location.search().scroll;
    if(elementName ) {
        scrollTo($(elementName));
    }
    
    //subscribing
    this.subscribe = function($valid){
        if($valid){
            
            var url = '/' + $scope.email;
            $http.put(url).then(function Success(response){
                controller.subscribeSuccess= response.data.output;
                controller.showSubscribeSuccess= true;

                $timeout(function(){
                    controller.subscribeSuccess= '';
                    controller.showSubscribeSuccess= false;
                }, 3000)
            }, function Error(error){
                controller.subscribeError = error.data.err;
                controller.showSubscribeError = true;

                $timeout(function(){
                    controller.subscribeError = '';
                    controller.showSubscribeError = false;
                }, 2300)
            })
        }
    }

    

});