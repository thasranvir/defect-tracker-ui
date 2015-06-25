angular.module('app').controller('ModalDemoCtrl', function ($scope, $modal, $log) {

  $scope.animationsEnabled = true;
  
 

  $scope.open = function (size,data) {
    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'html/modalTemplate.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        data: function () {
          return data;
        }
      }
    });
    
   

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };


});

angular.module('app').controller('ModalInstanceCtrl', function ($scope, $modalInstance,dataService,data) {
  $scope.defect={};
	console.log($scope.defect);
  $scope.defect = data;
  
  $scope.submit = function (defectObject) { 
	dataService.setData(defectObject);
    $modalInstance.dismiss('cancel');
  };
  
   $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});