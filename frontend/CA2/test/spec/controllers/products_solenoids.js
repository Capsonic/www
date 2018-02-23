'use strict';

describe('Controller: ProductsSolenoidsCtrl', function () {

  // load the controller's module
  beforeEach(module('ca2App'));

  var ProductsSolenoidsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductsSolenoidsCtrl = $controller('ProductsSolenoidsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProductsSolenoidsCtrl.awesomeThings.length).toBe(3);
  });
});
