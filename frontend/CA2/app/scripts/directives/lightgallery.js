'use strict';

/**
 * @ngdoc directive
 * @name ca2App.directive:lightGallery
 * @description
 * # lightGallery
 */
angular.module('ca2App').directive('lightGallery', function($timeout) {
    return {
        template: '<div ng-transclude></div>',
        restrict: 'E',
        transclude: true,
        replace: true,
        link: function postLink(scope, element, attrs) {
            $timeout(function() {
                $(element).lightGallery();
            });
        }
    };
});
