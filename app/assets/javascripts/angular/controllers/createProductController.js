traineesTango.controller('createProductController', ['$scope','$http', function($scope, $http){
  $scope.master= {};
  $scope.product= {};

  $scope.createProduct = function(product){
  $http.post('/products', { product: product });
  };

  $scope.reset = function() {
    $scope.product = angular.copy($scope.master);
  };
  
  $scope.reset();
  
}]);
