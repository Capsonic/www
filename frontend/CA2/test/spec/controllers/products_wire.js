'use strict';

describe('Controller: ProductsWireCtrl', function () {

  // load the controller's module
  beforeEach(module('ca2App'));

  var ProductsWireCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductsWireCtrl = $controller('ProductsWireCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProductsWireCtrl.awesomeThings.length).toBe(3);
  });
});
