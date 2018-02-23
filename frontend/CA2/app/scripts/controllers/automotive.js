'use strict';

/**
 * @ngdoc function
 * @name ca2App.controller:AutomotiveCtrl
 * @description
 * # AutomotiveCtrl
 * Controller of the ca2App
 */
angular.module('ca2App').controller('AutomotiveCtrl', function($timeout) {
    $timeout(function() {
        var myFlux = $('#slider').flux({
            pagination: false
        });

        $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
    });
});
