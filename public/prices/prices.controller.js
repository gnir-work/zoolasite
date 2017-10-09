
//Prices controller
angular.module('prices').
    controller('pricesController', function($scope, resourceService){
        var controller = this;
        resourceService.getPageData(function(pageData){
            controller.cuts = pageData.prices;
        });
});