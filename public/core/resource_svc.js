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
            cb(svc.loaded());
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