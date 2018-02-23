'use strict';

describe('Controller: TermsConditionsCtrl', function () {

  // load the controller's module
  beforeEach(module('ca2App'));

  var TermsConditionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TermsConditionsCtrl = $controller('TermsConditionsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TermsConditionsCtrl.awesomeThings.length).toBe(3);
  });
});
