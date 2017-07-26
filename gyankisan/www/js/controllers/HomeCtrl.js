// JavaScript Document
app.controller('HomeCtrl', function ($scope, $stateParams, ionicMaterialInk,$timeout) {

	$scope.demoCaption1 = "Your Name";
	$scope.demoCaption2 = "Tap to View Your Personal Information \n or \n To Update Your Phone Number"; 
	$scope.demoCaption3 = "Menu List";	
    

	// $scope.walkthroughs = [
	// 	{
	// 		t_id : 1,
	// 		t_wid : "Demo1",
	// 		t_focus : "#focus-item",
	// 		t_icon : "single_tap",
	// 		t_caption : "Your Name",
	// 		t_active : "true",
	// 		t_location : "BOTTOM",
	// 		t_button : "true",
	// 		t_buttonCaption : "Next"
	// 	}
	// ];

	$timeout(function(){
	    //$scope.demoActive1 = true;
	}, 500);

	$scope.nextStep = function(step){
		switch (step){
	      case 1:
	        $scope.demoActive1 = true;
	        break;
	      case 2:
	        $scope.demoActive2 = true;
	        break;
	      case 3:
	        $scope.demoActive3 = true;
	        break;
	      case 4:
	        $scope.demoActive4 = true;
	        break;
	    }
	};
	

});