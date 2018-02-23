'use strict';

describe('Controller: ProductsSwitchesCtrl', function () {

  // load the controller's module
  beforeEach(module('ca2App'));

  var ProductsSwitchesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductsSwitchesCtrl = $controller('ProductsSwitchesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProductsSwitchesCtrl.awesomeThings.length).toBe(3);
  });
});
