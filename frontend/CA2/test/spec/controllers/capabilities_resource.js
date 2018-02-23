'use strict';

describe('Controller: CapabilitiesResourceCtrl', function () {

  // load the controller's module
  beforeEach(module('ca2App'));

  var CapabilitiesResourceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CapabilitiesResourceCtrl = $controller('CapabilitiesResourceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CapabilitiesResourceCtrl.awesomeThings.length).toBe(3);
  });
});
