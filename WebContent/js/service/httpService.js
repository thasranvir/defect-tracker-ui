angular.module('app').factory('dataService', function () {

var defects = [
                    	  {
                    			id:"1",
            			description: "desc1",
            			date_raised: "02/02/2015",
            	        date_delivered : "28/05/2015",
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
            			date_raised: "02/02/2015",
            	        date_delivered : "28/05/2015",
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
            			date_raised: "02/02/2015",
            	        date_delivered : "28/05/2015",
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
            			date_raised: "02/02/2015",
            	        date_delivered : "28/05/2015",
            	        priority:"high",
            	        comments:"Urgent!!",
            	        status:"Not started",
            	        assigned_to :"romit",
            	        ETA: "08/09/2015",
            	        category:"defect",
            	        attachments:""		
            			
            		}
	                 ];
		
		return {
		    getData: function () {
		        return defects;
		    },
		    setData: function (defect) {
		    	defects.push(defect);
		    }
		}
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
    
   
});