'use strict';

/**
 * @ngdoc function
 * @name ca2App.controller:ProductsSolenoidsCtrl
 * @description
 * # ProductsSolenoidsCtrl
 * Controller of the ca2App
 */
angular.module('ca2App').controller('ProductsSolenoidsCtrl', function($timeout) {
    $timeout(function() {
        $("#accordion").accordion({
            collapsible: true,
            heightStyle: 'content',
            active: false
        });
    });
});
