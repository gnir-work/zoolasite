/**
 * Created by nir on 8/11/16.
 */

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
                otherwise('/main')
        }
    ]);