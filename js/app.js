var module = angular.module('myApp', []);

module.directive('chosen',function(){
    var linker = function(scope,element,attr) {
        if(attr.ngOptions){
            
    		//Get the name of the source list by getting the last String
    		nhOptionVals = attr.ngOptions.split(" ");
    		var sourceList = nhOptionVals[nhOptionVals.length - 1];

    		//We watch the source (each time this value change, then we trigger the event 'liszt:updated'
    		scope.$watch(sourceList,function(){
    			//See Updating Chosen Dynamically
                element.trigger('liszt:updated'); //Trigger event defined by Chosen Plugin (see Chosen documenation)
            })
            
            //Apply the plugin
            element.chosen();
    	}
    };

    return {
        restrict:'A',
        link: linker
    }
})


function RecipientsController($scope,$http) {
	
	$scope.recipientsList = [ {
		"login" : "john",
		"office" : {
			"name" : "103"
		}
	},{
		"login" : "max",
		"office" : {
			"name" : "104"
		}
	},{
		"login" : "dav",
		"office" : {
			"name" : "103"
		}
	},{
		"login" : "polo",
		"office" : {
			"name" : "103"
		}
	},{
		"login" : "marc",
		"office" : {
			"name" : "104"
		}
	}];
}