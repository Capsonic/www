'use strict';

/**
 * @ngdoc function
 * @name ca2App.controller:ProductsWireCtrl
 * @description
 * # ProductsWireCtrl
 * Controller of the ca2App
 */
angular.module('ca2App').controller('ProductsWireCtrl', function($scope, $timeout) {
    // $scope.categories = [{
    //     title: 'Transmission Wire Harness'
    // }, {
    //     title: 'Wiring & Connection System Products'
    // }, {
    //     title: 'Integrated Wiring Products'
    // }, {
    //     title: 'Grounding Products'
    // }];


    $timeout(function() {
        $("#accordion").accordion({
            collapsible: true,
            heightStyle: 'content',
            active: false
        });
    });
});
