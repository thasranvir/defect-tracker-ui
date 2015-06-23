var module = angular.module('app', ['ui.bootstrap']);


module.controller('DefectController',function ($scope,$rootScope) {
	$rootScope.defects = [
	  {
		id:"1",
		description: "desc1",
		date_raised: "19.05/2015",
        date_delivered : "28.05/2015",
        priority:"high",
        comments:"Urgent!!",
        status:"Not started",
        assigned_to :"romit",
        ETA: "08/09/2015",
        category:"defect",
        attachments:""	
	},
	{ 
		id:"2",
		description: "desc1",
		date_raised: "19.05/2015",
        date_delivered : "28.05/2015",
        priority:"high",
        comments:"Urgent!!",
        status:"Not started",
        assigned_to :"romit",
        ETA: "08/09/2015",
        category:"defect",
        attachments:""	
		
	},
	{
		id:"3",
		description: "desc1",
		date_raised: "19.05/2015",
        date_delivered : "28.05/2015",
        priority:"high",
        comments:"Urgent!!",
        status:"Not started",
        assigned_to :"romit",
        ETA: "08/09/2015",
        category:"defect",
        attachments:""	
		
	},
	{
		id:"4",
		description: "desc1",
		date_raised: "19.05/2015",
        date_delivered : "28.05/2015",
        priority:"high",
        comments:"Urgent!!",
        status:"Not started",
        assigned_to :"romit",
        ETA: "08/09/2015",
        category:"defect",
        attachments:""		
		
	}
];
	
	$scope.edit =function(defect,$scope){
		alert("Hi  " + defect.description);
		
		angular.element(document.getElementById('form_modal')).scope().open('lg');
		angular.element(document.getElementById('form_modal')).scope().populate(defect,$scope);
		
		
	}
			
	
	// $rootScope.defects.push($rootScope.defect);

})