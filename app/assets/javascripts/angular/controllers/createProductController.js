traineesTango.controller('createProductController', ['$scope','$http', function($scope, $http){
  $scope.master= {};

  $scope.createProduct = function(product){
  $http.post('/products', { product: product }).success();
  };

  $scope.reset = function() {
    $scope.product = angular.copy($scope.master);
  };
  
  $scope.reset();
  
}]);
