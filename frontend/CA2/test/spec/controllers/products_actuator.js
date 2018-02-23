'use strict';

describe('Controller: ProductsActuatorCtrl', function () {

  // load the controller's module
  beforeEach(module('ca2App'));

  var ProductsActuatorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductsActuatorCtrl = $controller('ProductsActuatorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProductsActuatorCtrl.awesomeThings.length).toBe(3);
  });
});
