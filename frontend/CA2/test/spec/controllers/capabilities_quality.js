'use strict';

describe('Controller: CapabilitiesQualityCtrl', function () {

  // load the controller's module
  beforeEach(module('ca2App'));

  var CapabilitiesQualityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CapabilitiesQualityCtrl = $controller('CapabilitiesQualityCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CapabilitiesQualityCtrl.awesomeThings.length).toBe(3);
  });
});
