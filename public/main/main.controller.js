//Main page component
angular.module('mainPage').controller('mainPageController',
    function ($scope, $location, $anchorScroll, NgMap, $http, $timeout, resourceService) {

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
        resourceService.getPageData(function (pageData) {
            controller.praisesData = pageData.praisesData;
            controller.aboutData = pageData.aboutData;
            console.log(pageData.aboutData);
            setWorkersLayout(pageData.workersData);
        });

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