
var dataService = function($http) {
	var getData = function() {
		return $http.post(
				'http://10.227.87.60:9000/defect-tracker/fetchDefectList.json',{})
				.then(function(response) {
					return response.data;
				}, onError)

	};
	var onError = function(status) {
		console.log('An error has occured : stats' + status);
	};
	
	var addData = function(data) {
		return $http.post(
				'http://10.227.87.60:9000/defect-tracker/addDefect.json',data)
				.then(function(response) {
					return response.data;
				}, onError)

	};
	var onError = function(status) {
		console.log('An error has occured : stats' + status);
	};
	

	var updateData = function(data) {
		return $http.post(
				'http://10.227.87.60:9000/defect-tracker/updateDefect.json',data)
				.then(function(response) {
					return response.data;
				}, onError)

	};
	var download = function(){
		 return $http.get('http://10.227.87.60:9000/defect-tracker/downloadAsExcel.json')
	.then(function(response){
		console.log('Success');
	}, onError);
	};
	var onError = function(status) {
		console.log('An error has occured : stats' + status);
	};
	return {
		getData : getData,
		addData : addData,
		updateData:updateData,
		download : download
	};

}
var module = angular.module('app', [ 'ui.bootstrap' ]);
module.factory('dataService', dataService);
/*this.save = function (defect) {
	$http.post('/someUrl', defect).
	  success(function(data, status, headers, config) {
	    // this callback will be called asynchronously
	    // when the response is available
		  
	  }).
	  error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });
}*/

