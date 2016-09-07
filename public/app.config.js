
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