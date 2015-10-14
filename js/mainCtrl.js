var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService){
  
  
  $scope.addToggle = false;
  $scope.removeToggle = false;
  $scope.filterToggle = false;
  $scope.filteredQuotes = "";
  $scope.quotes = dataService.getData();
  
  $scope.add = function(object) {
    
    dataService.addData(object);
    
  }
  
  $scope.remove = function(quote){
    
   dataService.removeData(quote); 
    
  }
  
});