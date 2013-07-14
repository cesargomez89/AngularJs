traineesTango.controller('productsController', ['$scope','$http', function($scope, $http){

  $scope.showProducts = function(){
    $http.get('/products.json').success(function(products){
      $scope.products= products;
    });
  };
  
}]);


