
//Zoola module
angular.module('zoolaApp', [
    'ngRoute', 
    'mainPage',
    'gallery',
    'prices'
]);

//Zoola App config
angular.
    module('zoolaApp').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {

            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/main', {
                    template: '<main-page></main-page>',
            }).
                when('/gallery',{
                    template: '<gallery></gallery>'
            }).
                when('/prices',{
                    template: '<prices></prices>'
            }).
                otherwise('/main')
        }
    ]);
angular.module('zoolaApp').controller('zoolaController', ['$scope', 'resourceService', function ($scope, resourceService) {
    resourceService.doneLoadingCallbacks.push(function () {
        //Hide loader
        angular.element(document).ready(function () {
            $('.main-loader').hide();
            $('.content').css('opacity', '1');
        });

    });
}]);
angular.module('zoola.core', []);
angular.module('zoola.core').factory('resourceService', ['$http', function ($http) {
    svc = {};
    svc.doneLoadingCallbacks = [];
    svc.static = {
        parallaxData: {
            data: [
                "images/zoola_parallax2.jpg",
                "images/zoola_inside.jpg",
                "images/parallax2.jpg"
            ]
        }
    };
    svc.getPageData = function (cb) {
        if (svc.loaded) {
            cb(svc.loaded);
        } else {
            $http.get('/loadPageData').then(function (response) {
                svc.loaded = response.data;
                cb(svc.loaded);
                angular.forEach(svc.doneLoadingCallbacks, function(cb) {
                    cb(svc.loaded);
                });
            });
        }
    };
    return svc;
}]);

//Gallery module
angular.module('gallery', []);

//Gallery controller
angular.module('gallery').
    controller('galleryController', ['$scope', '$http', function($scope, $http){
    $('.parallax-mirror').remove();

    //Gallery clicking function
    this.showPhoto = function($event){
        var src = $event.currentTarget.src;
        var imageSnippet = "<img class='modal-photo' src='" + src + "' alt='modal photo' />"
        $('.photoModal-body').html(imageSnippet);
        $('#photoModal').modal('show');
    };

    var controller = this;

    $http.get('/insta/media').then(function success(response){
        var rawPhotos = response.data.media;
        var photos = [];
        var tmpPhotos = [];
        for(var i = 1; i <= rawPhotos.length; i++){
            tmpPhotos.push({
                src: rawPhotos[i - 1].src,
                alt: 'gallery image'
            });

            if(i % 4 == 0){
                photos.push(tmpPhotos);
                tmpPhotos = [];
            }
        }
        photos.push(tmpPhotos);
        controller.photos = photos;
        $('.gallery-loader').hide();
    }, function Error(err){
        console.log(JSON.stringify(err));
    });


    
}]);

//Gallery component
angular.module('gallery').
    component('gallery', {
        templateUrl: 'gallery/gallery-page.html',
        controller: 'galleryController'
});
function login() {
    $.post('/admin/login', {username: $("#username").val(), password: $("#password").val()}, function (data) {
        console.log('success');
        window.location.href = "/admin/"
    }).fail(function (data) {
        messageContainer = $("#bad-login-message");
        messageContainer.find(".message").text(data.responseText);
        messageContainer.show();
        setTimeout(function () {
            $("#bad-login-message").hide();
        }, 5000);
    })

}

function showPassword() {
    var $password = $('#password');
    var key_attr = $password.attr('type');

    if (key_attr != 'text') {

        $('.checkbox').addClass('show');
        $password.attr('type', 'text');

    } else {

        $('.checkbox').removeClass('show');
        $password.attr('type', 'password');

    }

}

//Main page module
angular.module('mainPage',['zoola.core', 'ngMap', 'ngParallax']);
//Main page component
angular.module('mainPage').controller('mainPageController',
    ['$scope', '$location', '$anchorScroll', 'NgMap', '$http', '$timeout', 'resourceService', function ($scope, $location, $anchorScroll, NgMap, $http, $timeout, resourceService) {

        //Setting controller scope
        var controller = this;
        controller.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        //google map
        $scope.googleMapsUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAQG895e-uvGCZE2GSbwLWCIeqbyih9imI";
        NgMap.getMap().then(function (map) {
        });

        controller.test = "images/zoola_parallax2.jpg";
        //Parallax code
        controller.parallaxData = resourceService.static.parallaxData;

        // //Workers code
        const setWorkersLayout = function (workersData) {
            var workersPerRow = 3;
            if (workersData.data.length % 3 == 1)
                workersPerRow = 2;
            controller.workersRows = [];
            var tmpRow = [];

            for (var i = 1; i <= workersData.data.length; i++) {
                tmpRow.push(workersData.data[i - 1]);
                if (i % workersPerRow == 0) {
                    controller.workersRows.push(tmpRow);
                    tmpRow = []
                }
            }
            controller.workersRows.push(tmpRow);

        };

        //Scrolling
        var elementName = $location.search().scroll;
        if (elementName) {
            console.log(elementName);
            $anchorScroll($location.hash(elementName));
        }

        //subscribing
        this.subscribe = function ($valid) {
            if ($valid) {
                var url = '/' + $scope.email;
                $http.put(url).then(function Success(response) {
                    controller.subscribeSuccess = response.data.output;
                    swal("Welcome to the family :)", response.data.output, 'success');
                }, function Error(error) {
                    swal("Couldn't subscribe you :(", error.data.err, 'error');
                })
            }
        };

        //Load data from the server
        resourceService.getPageData(function (pageData) {
            controller.praisesData = pageData.praisesData;
            controller.aboutData = pageData.aboutData;
            console.log(pageData.aboutData);
            setWorkersLayout(pageData.workersData);
        });
    }]);

//Main page component
angular.module('mainPage').
    component('mainPage', {
        templateUrl: 'main/main-page.html',
        controller: 'mainPageController'
});
angular.module('mainPage').directive('praise', function() {
   return {
       templateUrl: 'main/praise/praise.html',
       restrict: 'E',
       scope: {
           praise: '='
       }
   }
});

//Prices module
angular.module('prices',['zoola.core']);

//Prices controller
angular.module('prices').
    controller('pricesController', ['$scope', 'resourceService', function($scope, resourceService){
        var controller = this;
        resourceService.getPageData(function(pageData){
            controller.cuts = pageData.prices;
        });
}]);

//Prices page component
angular.module('prices').
component('prices', {
    templateUrl: 'prices/prices-page.html',
    controller: 'pricesController'
});