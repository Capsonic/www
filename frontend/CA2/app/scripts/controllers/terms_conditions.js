'use strict';

/**
 * @ngdoc function
 * @name ca2App.controller:TermsConditionsCtrl
 * @description
 * # TermsConditionsCtrl
 * Controller of the ca2App
 */
angular.module('ca2App').controller('TermsConditionsCtrl', function($timeout) {
    $timeout(function() {
        $("#accordion").accordion({
            collapsible: true,
            heightStyle: 'content',
            active: false
        });
    });
});
