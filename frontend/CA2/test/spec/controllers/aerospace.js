'use strict';

describe('Controller: AerospaceCtrl', function () {

  // load the controller's module
  beforeEach(module('ca2App'));

  var AerospaceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AerospaceCtrl = $controller('AerospaceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AerospaceCtrl.awesomeThings.length).toBe(3);
  });
});
