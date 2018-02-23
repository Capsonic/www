'use strict';

describe('Controller: AutomotiveCtrl', function () {

  // load the controller's module
  beforeEach(module('ca2App'));

  var AutomotiveCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AutomotiveCtrl = $controller('AutomotiveCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AutomotiveCtrl.awesomeThings.length).toBe(3);
  });
});
