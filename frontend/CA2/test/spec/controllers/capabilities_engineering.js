'use strict';

describe('Controller: CapabilitiesEngineeringCtrl', function () {

  // load the controller's module
  beforeEach(module('ca2App'));

  var CapabilitiesEngineeringCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CapabilitiesEngineeringCtrl = $controller('CapabilitiesEngineeringCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CapabilitiesEngineeringCtrl.awesomeThings.length).toBe(3);
  });
});
