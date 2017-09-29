angular.module('mainPage').directive('praise', function() {
   return {
       templateUrl: 'main/praise/praise.html',
       restrict: 'E',
       scope: {
           praise: '='
       }
   }
});