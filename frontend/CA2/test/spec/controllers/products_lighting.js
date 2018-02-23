'use strict';

describe('Controller: ProductsLightingCtrl', function () {

  // load the controller's module
  beforeEach(module('ca2App'));

  var ProductsLightingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductsLightingCtrl = $controller('ProductsLightingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProductsLightingCtrl.awesomeThings.length).toBe(3);
  });
});
