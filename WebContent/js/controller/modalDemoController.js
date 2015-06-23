angular.module('app').controller('ModalDemoCtrl', function ($scope, $modal, $log,$rootScope) {

 // $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;
  
 

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'html/modalTemplate.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
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

  $scope.populate = function(defect,ref){
  	  alert("Hi  " + defect.description);  	
  	  $scope.items = defect;
  	  //alert(ref.items)
  	 // angular.element(document.getElementById("description")).value = defect.description;
  	 //ref.defect.description = defect.description;
    };
});

angular.module('app').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items,$rootScope) {

	 
  $scope.items = items;
  $scope.selected = {
    item: $scope.items
  };
  //console.log("defect--------"+$scope.items);
  $scope.submit = function () {
    console.log($scope.defect);
 
    $rootScope.defects.push($scope.defect);
    $modalInstance.dismiss('cancel');
  };
 //console.log("fghjkl;"+$scope.defect.description);
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});