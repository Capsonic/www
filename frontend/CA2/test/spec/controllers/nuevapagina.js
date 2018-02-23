'use strict';

describe('Controller: NuevapaginaCtrl', function () {

  // load the controller's module
  beforeEach(module('ca2App'));

  var NuevapaginaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NuevapaginaCtrl = $controller('NuevapaginaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NuevapaginaCtrl.awesomeThings.length).toBe(3);
  });
});
