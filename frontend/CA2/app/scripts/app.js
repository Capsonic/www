'use strict';

/**
 * @ngdoc overview
 * @name ca2App
 * @description
 * # ca2App
 *
 * Main module of the application.
 */
angular.module('ca2App', [
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.tree'
]).config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl',
            controllerAs: 'about'
        })
        .when('/automotive', {
            templateUrl: 'views/automotive.html',
            controller: 'AutomotiveCtrl',
            controllerAs: 'automotive'
        })
        .when('/aerospace', {
            templateUrl: 'views/aerospace.html',
            controller: 'AerospaceCtrl',
            controllerAs: 'aerospace'
        })
        .when('/products', {
            templateUrl: 'views/products.html',
            controller: 'ProductsCtrl',
            controllerAs: 'products'
        })
        .when('/products_wire', {
            templateUrl: 'views/products_wire.html',
            controller: 'ProductsWireCtrl',
            controllerAs: 'productsWire'
        })
        .when('/products_actuator', {
            templateUrl: 'views/products_actuator.html',
            controller: 'ProductsActuatorCtrl',
            controllerAs: 'productsActuator'
        })
        .when('/products_switches', {
            templateUrl: 'views/products_switches.html',
            controller: 'ProductsSwitchesCtrl',
            controllerAs: 'productsSwitches'
        })
        .when('/products_motors', {
            templateUrl: 'views/products_motors.html',
            controller: 'ProductsMotorsCtrl',
            controllerAs: 'productsMotors'
        })
        .when('/products_lighting', {
            templateUrl: 'views/products_lighting.html',
            controller: 'ProductsLightingCtrl',
            controllerAs: 'productsLighting'
        })
        .when('/products_solenoids', {
            templateUrl: 'views/products_solenoids.html',
            controller: 'ProductsSolenoidsCtrl',
            controllerAs: 'productsSolenoids'
        })
        .when('/products_sensors', {
            templateUrl: 'views/products_sensors.html',
            controller: 'ProductsSensorsCtrl',
            controllerAs: 'productsSensors'
        })
        .when('/capabilities_engineering', {
            templateUrl: 'views/capabilities_engineering.html',
            controller: 'CapabilitiesEngineeringCtrl',
            controllerAs: 'capabilitiesEngineering'
        })
        .when('/capabilities_manufacturing', {
            templateUrl: 'views/capabilities_manufacturing.html',
            controller: 'CapabilitiesManufacturingCtrl',
            controllerAs: 'capabilitiesManufacturing'
        })
        .when('/capabilities_quality', {
            templateUrl: 'views/capabilities_quality.html',
            controller: 'CapabilitiesQualityCtrl',
            controllerAs: 'capabilitiesQuality'
        })
        .when('/capabilities_resource', {
            templateUrl: 'views/capabilities_resource.html',
            controller: 'CapabilitiesResourceCtrl',
            controllerAs: 'capabilitiesResource'
        })
        .when('/locations', {
            templateUrl: 'views/locations.html',
            controller: 'LocationsCtrl',
            controllerAs: 'locations'
        })
        .when('/valueStream', {
            templateUrl: 'views/valuestream.html',
            controller: 'ValuestreamCtrl',
            controllerAs: 'valueStream'
        })
        .when('/valueStream_supplier', {
            templateUrl: 'views/valuestream_supplier.html',
            controller: 'ValuestreamSupplierCtrl',
            controllerAs: 'valueStreamSupplier'
        })
        .when('/valueStream_alliances', {
            templateUrl: 'views/valuestream_alliances.html',
            controller: 'ValuestreamAlliancesCtrl',
            controllerAs: 'valueStreamAlliances'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl',
            controllerAs: 'contact'
        })
        .when('/terms_conditions', {
            templateUrl: 'views/terms_conditions.html',
            controller: 'TermsConditionsCtrl',
            controllerAs: 'termsConditions'
        })
        .when('/nuevaPagina', {
          templateUrl: 'views/nuevapagina.html',
          controller: 'NuevapaginaCtrl',
          controllerAs: 'nuevaPagina'
        })
        .otherwise({
            redirectTo: '/'
        });
}).run(function($rootScope, $location, $timeout) {
    $('#goTop').goTop();
    $rootScope.$on('$routeChangeSuccess', function() {
        if ($rootScope.previousLocation != $location.path()) {
            $timeout(function() {
                jQuery('body').animate({
                    scrollTop: 0
                }, 1000);
            });
        }
        $rootScope.previousLocation = $rootScope.activePath;
        $rootScope.activePath = $location.path();
        if ($rootScope.activePath == '') {
            angular.element('#mainLogo').hide();
        } else {
            angular.element('#mainLogo').show();
        }
    });

    $rootScope.go = function(path) {
        if (path == '') {
            if (angular.element(".navbar-toggle").is(':visible')) {
                angular.element(".navbar-toggle").click();
            }

        }
        if (path != $location.url()) {
            $location.url(path);
            if (angular.element(".navbar-toggle").is(':visible')) {
                angular.element(".navbar-toggle").click();
            }
        }
    };
});;
