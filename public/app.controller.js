
angular.module('zoolaApp').
    controller('zoolaController', function($scope){
        angular.element(document).ready(function () {
            //Hide loader
            $('.main-loader').hide();
            $('.content').css('opacity', '1');
        });
    });