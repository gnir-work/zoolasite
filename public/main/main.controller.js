//Main page component
angular.module('mainPage').controller('mainPageController', function ($scope, $location, NgMap, $http, $timeout) {

    //Setting controller scope
    var controller = this;
    controller.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    //google map
    $scope.googleMapsUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAQG895e-uvGCZE2GSbwLWCIeqbyih9imI";
    NgMap.getMap().then(function (map) {
    });

    //Parallax code
    controller.parallaxImages = [
        'images/zoola_parallax2.jpg',
        'images/zoola_inside.jpg',
        'images/parallax2.jpg'
    ];


    controller.numOfCircles = 3;
    angular.element(document).ready(function () {
        //Center scissor connection
        if ($(window).width() > 1200) {
            $('.scissor-connection').css('margin-top', $('.praise-text').height() / 2 - $('.fa-scissors').height());
            var circleWidth = $('.fa-circle').width();
            var numOfCircles = Math.round(($('.scissor-connection').width() - circleWidth * 6) / circleWidth) / 2;
            for (var i = 0; i < numOfCircles - 1; i++)
                $('.scissor-connection').append('<i class="fa fa-circle"> </i>')
            $('.scissor-connection').append('<i class="fa fa-circle last-dot"> </i>')
        }

        //Center praise text
        var margin = $('.praise-text').height() - $('.praise-text p').height();
        $('.praise-text').css('padding-top', margin / 2);

    });
    //Workers code
    var workersData = [{
        name: 'Gil Jacob - Owner',
        src: 'images/gil.jpg',
        description: 'Gil is always the first to greet you with a smile when you enter the salon, making you feel comfortable and at ease. Gil first began his journey as a hair stylist when he was 14 years old, with his sister being his first client. He immediately realized his passion for the craft and was already working as an assistant at a hair salon by the age of 16! Through hard work and dedication Gil was able to open “Zoola” salon 5 years later. In November 2016, the salon was relocated to a new, renovated and larger location, as a result of the growing success of the business. Gil takes pride of his salon as it is the product of many years of dedication and hard work.'
    }, {
        name: 'Alina - Stylist',
        src: 'images/alina.jpg',
        description: 'I had graduated from hairdressing school at 2008 and started my full-time career as a stylist at the salon. A year later I became a first time mom and made my family my first priority. During this time I continued my career on a part time basis. Now that both of my kids are in school Im exited to be back.'
    }];

    //Set workers layout
    var workersPerRow = 3;
    if (workersData.length % 3 == 1)
        workersPerRow = 2;
    controller.workersRows = [];
    var tmpRow = [];

    for (var i = 1; i <= workersData.length; i++) {
        tmpRow.push(workersData[i - 1]);
        if (i % workersPerRow == 0) {
            controller.workersRows.push(tmpRow);
            tmpRow = []
        }
    }

    controller.workersRows.push(tmpRow);


    //Scrolling
    var scrollTo = function (element) {
        var offset = 0;
        if (elementName == 'footer')
            offset = 1000;
        $('html, body').stop().animate({
            scrollTop: element.offset().top - $('.nav').height() + 10 + offset
        }, 'slow');
    };

    var elementName = $location.search().scroll;
    if (elementName) {
        scrollTo($(elementName));
    }

    //subscribing
    this.subscribe = function ($valid) {
        if ($valid) {

            var url = '/' + $scope.email;
            $http.put(url).then(function Success(response) {
                controller.subscribeSuccess = response.data.output;
                controller.showSubscribeSuccess = true;

                $timeout(function () {
                    controller.subscribeSuccess = '';
                    controller.showSubscribeSuccess = false;
                }, 3000)
            }, function Error(error) {
                controller.subscribeError = error.data.err;
                controller.showSubscribeError = true;

                $timeout(function () {
                    controller.subscribeError = '';
                    controller.showSubscribeError = false;
                }, 2300)
            })
        }
    }


});