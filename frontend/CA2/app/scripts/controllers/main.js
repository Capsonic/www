'use strict';

/**
 * @ngdoc function
 * @name ca2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ca2App
 */
angular.module('ca2App').controller('MainCtrl', function($timeout) {
    angular.element('#mainLogo').hide();

    var tl = new TimelineLite();
    $timeout(function() {
        var windowWidth = $('.mainContainer').width()
        $('#imgBorderParts').css('width', windowWidth);
        tl.to('#imgHeaderOne', 2, {
            autoAlpha: 0
        }, '+=1').from('#imgHeaderTwo', 5, {
            autoAlpha: 0,
        }, '-=2').from('#divBorderParts', 1.5, {
            left: windowWidth + 20,
            // bottom: 150,
            // ease: Bounce.easeOut
            onComplete: function() {
                $('#imgBorderParts').css('width', '100%');
            }
        }, '-=4').staggerFrom('.titleAnimated', 2, {
            autoAlpha: 0,
            scale: 10,
            color: 'grey',
            textShadow: ''
        }, .5, '-=4');
    });
});
