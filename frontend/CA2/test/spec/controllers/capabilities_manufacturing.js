'use strict';

describe('Controller: CapabilitiesManufacturingCtrl', function () {

  // load the controller's module
  beforeEach(module('ca2App'));

  var CapabilitiesManufacturingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CapabilitiesManufacturingCtrl = $controller('CapabilitiesManufacturingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CapabilitiesManufacturingCtrl.awesomeThings.length).toBe(3);
  });
});
