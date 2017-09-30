angular.module('zoolaApp').controller('zoolaController', function ($scope, resourceService) {
    resourceService.doneLoadingCallbacks.push(function () {
        //Hide loader
        angular.element(document).ready(function () {
            $('.main-loader').hide();
            $('.content').css('opacity', '1');
        });

    });
});