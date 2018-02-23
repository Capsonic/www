'use strict';

/**
 * @ngdoc function
 * @name ca2App.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the ca2App
 */
angular.module('ca2App').controller('ContactCtrl', function($scope, EmailService) {
    $scope.sendMessage = function(message) {

        var email = angular.copy(message);
        email.id = 0;
        email.editMode = true;
        email.Body = 'Email sent from www.capsonic.com/CA2, by: <a href="mailto:' + email.FromEmail + '">' + email.FromName + '</a><br>' +
            email.Body;
        alertify.message('Sending in progress...');
        angular.element('[type="submit"]').attr("disabled", "disabled");
        EmailService.save(email).then(function() {
            alertify.success('Email Sent Successfully.');
        });
    }


});
