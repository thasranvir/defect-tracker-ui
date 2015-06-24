var module = angular.module('app', ['ui.bootstrap']);


module.controller('DefectController',['$scope','dataService',function ($scope,dataService) {

	$scope.defects = dataService.getData();
	
	$scope.edit =function(defect,$scope){
		angular.element(document.getElementById('form_modal')).scope().open('lg',defect);	
	}


}])