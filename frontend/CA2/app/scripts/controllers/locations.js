'use strict';

/**
 * @ngdoc function
 * @name ca2App.controller:LocationsCtrl
 * @description
 * # LocationsCtrl
 * Controller of the ca2App
 */
angular.module('ca2App').controller('LocationsCtrl', function($timeout) {
    $timeout(function() {

        /*Auburn Hills Map*/
        L.mapbox.accessToken = 'pk.eyJ1IjoiaW5zcGlyYWNvZGUiLCJhIjoiY2lodjg2YndyMDIwZnY0a29qZjc0bTNzbCJ9.RVsl3Cxz87t55LkyvL3nwg';
        var mapAuburnHills = L.mapbox.map('mapAuburnHills', 'mapbox.streets')
            .setView([42.672973, -83.228731], 12);

        L.marker([42.672973, -83.228731]).addTo(mapAuburnHills)
            .bindPopup('3121 University Drive, Suite 120 Auburn Hills, MI 48326')
            .openPopup();

        /*Elgin Map*/
        L.mapbox.accessToken = 'pk.eyJ1IjoiaW5zcGlyYWNvZGUiLCJhIjoiY2lodjg2YndyMDIwZnY0a29qZjc0bTNzbCJ9.RVsl3Cxz87t55LkyvL3nwg';
        var mapElgin = L.mapbox.map('mapElgin', 'mapbox.streets')
            .setView([42.072963, -88.278835], 12);

        L.marker([42.072963, -88.278835]).addTo(mapElgin)
            .bindPopup('1595 High Point Drive Elgin, IL 60123')
            .openPopup();

        /*El Paso Map*/
        L.mapbox.accessToken = 'pk.eyJ1IjoiaW5zcGlyYWNvZGUiLCJhIjoiY2lodjg2YndyMDIwZnY0a29qZjc0bTNzbCJ9.RVsl3Cxz87t55LkyvL3nwg';
        var mapElPaso = L.mapbox.map('mapElPaso', 'mapbox.streets')
            .setView([31.7202445, -106.3017787], 12);

        L.marker([31.7202445, -106.3017787]).addTo(mapElPaso)
            .bindPopup('12120 Esther Lama Drive Suite 120, Building 2 El Paso, TX 79936')
            .openPopup();

        /*7 Zane Grey Map*/
        L.mapbox.accessToken = 'pk.eyJ1IjoiaW5zcGlyYWNvZGUiLCJhIjoiY2lodjg2YndyMDIwZnY0a29qZjc0bTNzbCJ9.RVsl3Cxz87t55LkyvL3nwg';
        var mapElPasoSevenZaneGrey = L.mapbox.map('mapElPasoSevenZaneGrey', 'mapbox.streets')
            .setView([31.8058377, -106.4083787], 12);

        L.marker([31.8058377, -106.4083787]).addTo(mapElPasoSevenZaneGrey)
            .bindPopup('7 Zane Grey Street, El Paso, TX, USA')
            .openPopup();

        /*Juarez Map*/
        L.mapbox.accessToken = 'pk.eyJ1IjoiaW5zcGlyYWNvZGUiLCJhIjoiY2lodjg2YndyMDIwZnY0a29qZjc0bTNzbCJ9.RVsl3Cxz87t55LkyvL3nwg';
        var mapJuarez = L.mapbox.map('mapJuarez', 'mapbox.streets')
            .setView([31.7472126, -106.4292406], 12);

        L.marker([31.7472126, -106.4292406]).addTo(mapJuarez)
            .bindPopup('Hermanos Escobar 6551, Omega, 32410 Juárez, Chih., Mexico')
            .openPopup();

    });

});
