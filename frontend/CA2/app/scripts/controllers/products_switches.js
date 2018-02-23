'use strict';

/**
 * @ngdoc function
 * @name ca2App.controller:ProductsSwitchesCtrl
 * @description
 * # ProductsSwitchesCtrl
 * Controller of the ca2App
 */
angular.module('ca2App').controller('ProductsSwitchesCtrl', function($timeout) {
    $timeout(function() {
        $("#accordion").accordion({
            collapsible: true,
            heightStyle: 'content',
            active: false
        });
    });
});
