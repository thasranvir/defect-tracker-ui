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
 
  
  $scope.defect_id = false;
	console.log("defect category---"+$scope.defect.category);
  $scope.defect = data;

  if($scope.defect){
	  $scope.defect.dateRaised= dateFormatMillToDate($scope.defect.dateRaised);
	  $scope.defect.dateDelivered= dateFormatMillToDate($scope.defect.dateDelivered);
	  $scope.defect.eta = dateFormatMillToDate($scope.defect.eta);
  }

  function dateFormatMillToDate(date){
	  var d = new Date(date);
	  return d.getMonth()+"/"+d.getDay()+"/"+d.getFullYear();
  }
  
  $scope.submit = function (defectObject) { 
	 /* if(typeof defectObject === 'undefined'){
		  alert("All fields are mandatory : defectObject");
	  }
	  else{
		  if(typeof defectObject.description  === 'undefined' || typeof defectObject.dateRaised === 'undefined' || typeof defectObject.dateDelivered === 'undefined' || typeof defectObject.priority === 'undefined' || typeof defectObject.comments === 'undefined' || typeof defectObject.status === 'undefined' || typeof defectObject.assignedTo === 'undefined' || typeof defectObject.eta === 'undefined' || typeof defectObject.category === 'undefined'){
		  alert("All fields are mandatory");
	  }
	  }*/
	 if(typeof defectObject.id == 'undefined'){
		 dataService.addData(defectObject).then(onSuccess, onError);
		    var onError = function(status){
				console.log('An error has occured with status : '+status);
			};
			var onSuccess = function(data,status){
				console.log(status);
				 $modalInstance.dismiss('cancel');
						
			}
			location.reload(true);
	 }
	else
	 {
		 dataService.updateData(defectObject).then(onSuccess, onError);
		    $modalInstance.dismiss('cancel');
		    var onError = function(status){
				console.log('An error has occured with status : '+status);
			};
			var onSuccess = function(data,status){
				console.log(status);
				 $modalInstance.dismiss('cancel');
			}
	 
};

  };
  
   $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
  			
});