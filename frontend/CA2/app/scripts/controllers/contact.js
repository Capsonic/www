'use strict';

/**
 * @ngdoc function
 * @name ca2App.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the ca2App
 */
angular.module('ca2App').controller('ContactCtrl', function($scope) {
    $scope.sendMessage = function() {
    	alert('sending');
    }
});
