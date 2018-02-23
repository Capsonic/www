'use strict';

describe('Controller: ProductsSensorsCtrl', function () {

  // load the controller's module
  beforeEach(module('ca2App'));

  var ProductsSensorsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductsSensorsCtrl = $controller('ProductsSensorsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProductsSensorsCtrl.awesomeThings.length).toBe(3);
  });
});
