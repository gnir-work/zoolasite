
//Prices controller
angular.module('prices').
    controller('pricesController', function($scope, resourceService){

        this.cuts = resourceService.loaded.prices;
});