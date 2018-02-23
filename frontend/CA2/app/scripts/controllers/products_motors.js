'use strict';

/**
 * @ngdoc function
 * @name ca2App.controller:ProductsMotorsCtrl
 * @description
 * # ProductsMotorsCtrl
 * Controller of the ca2App
 */
angular.module('ca2App').controller('ProductsMotorsCtrl', function($timeout) {
    $timeout(function() {
        $("#accordion").accordion({
            collapsible: true,
            heightStyle: 'content',
            active: false
        });
    });
});
