var module = angular.module('app');

module.controller('DefectController',['$scope','dataService',function ($scope,dataService) {
			$scope.tabledisplay = true;
	var onDefectData = function(data){
			$scope.defects = data.defects;
			$scope.tabledisplay = false;
	};
	var onError = function(status){
		console.log('An error has occured with status : '+status);
	};
	dataService.getData().then(onDefectData, onError);

	$scope.edit =function(defect,$scope){
		angular.element(document.getElementById('form_modal')).scope().open('lg',defect);	
	}

	$scope.download =function(){
		
		dataService.download().then(console.log('Success'), onError);
	}
}])
