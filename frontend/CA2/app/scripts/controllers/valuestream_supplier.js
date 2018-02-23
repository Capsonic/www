'use strict';

/**
 * @ngdoc function
 * @name ca2App.controller:ValuestreamSupplierCtrl
 * @description
 * # ValuestreamSupplierCtrl
 * Controller of the ca2App
 */
angular.module('ca2App').controller('ValuestreamSupplierCtrl', function($timeout) {
    $timeout(function() {
        $("#accordion").accordion({
            collapsible: true,
            heightStyle: 'content',
            active: false
        });
    });
});
