'use strict';

describe('Controller: ValuestreamSupplierCtrl', function () {

  // load the controller's module
  beforeEach(module('ca2App'));

  var ValuestreamSupplierCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ValuestreamSupplierCtrl = $controller('ValuestreamSupplierCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ValuestreamSupplierCtrl.awesomeThings.length).toBe(3);
  });
});
