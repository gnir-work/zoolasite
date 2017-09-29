angular.module('zoola.core').factory('resourceService', function () {
    svc = {};
    svc.loaded = {
        parallaxData: {
            data: [
                'images/zoola_parallax2.jpg',
                'images/zoola_inside.jpg',
                'images/parallax2.jpg'
            ]
        }
    };
    return svc;
});