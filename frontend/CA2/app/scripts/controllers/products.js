'use strict';

/**
 * @ngdoc function
 * @name ca2App.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the ca2App
 */
angular.module('ca2App').controller('ProductsCtrl', function($timeout) {
    $timeout(function() {
        $('#accordionWire').accordion({
            collapsible: true,
            heightStyle: 'content',
            active: false,
            event: 'mouseover'
        });
        $('#accordionActuators').accordion({
            collapsible: true,
            heightStyle: 'content',
            active: false,
            event: 'mouseover'
        });
        $('#accordionSwitches').accordion({
            collapsible: true,
            heightStyle: 'content',
            active: false,
            event: 'mouseover'
        });
        $('#accordionMotors').accordion({
            collapsible: true,
            heightStyle: 'content',
            active: false,
            event: 'mouseover'
        });
        $('#accordionLighting').accordion({
            collapsible: true,
            heightStyle: 'content',
            active: false,
            event: 'mouseover'
        });
        $('#accordionSolenoids').accordion({
            collapsible: true,
            heightStyle: 'content',
            active: false,
            event: 'mouseover'
        });
        $('#accordionSensors').accordion({
            collapsible: true,
            heightStyle: 'content',
            active: false,
            event: 'mouseover'
        });
    });
});
