'use strict';

describe('Controller: ValuestreamCtrl', function () {

  // load the controller's module
  beforeEach(module('ca2App'));

  var ValuestreamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ValuestreamCtrl = $controller('ValuestreamCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ValuestreamCtrl.awesomeThings.length).toBe(3);
  });
});
