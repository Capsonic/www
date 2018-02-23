'use strict';

describe('Controller: ValuestreamAlliancesCtrl', function () {

  // load the controller's module
  beforeEach(module('ca2App'));

  var ValuestreamAlliancesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ValuestreamAlliancesCtrl = $controller('ValuestreamAlliancesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ValuestreamAlliancesCtrl.awesomeThings.length).toBe(3);
  });
});
