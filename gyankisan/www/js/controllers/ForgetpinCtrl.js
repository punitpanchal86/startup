// JavaScript Document
app.controller('ForgetpinCtrl', function ($scope,$state, $stateParams, ionicMaterialInk, Api, $ionicLoading,ionicSuperPopup) {

	$scope.isStep1 = true;
	$scope.sendPhone = function(phonenumber){
		
		$ionicLoading.show();

		Api.FarmerResetPin(phonenumber).then(function(success){
		
			if (success.data.success === 1) {
				$scope.phonenumber = phonenumber;
				$scope.isStep1 = false;
			}
            else{
            	
                var msg= 'Invalid Mobile no : ' + phonenumber;// ionicSuperPopup.show("Basic Super Popup!");
                $scope.phonenumber = '';
                ionicSuperPopup.show("", msg , "error");  
                //console.log('error');
               
            }
			
        $ionicLoading.hide();
			
		},
		function(error){
				ionicSuperPopup.show("Internet Issue", "Make sure Internet connection is on." , 'error');
                $ionicLoading.hide();
                //console.log("error ", error); 

		});
	};

	$scope.sendOtp = function(otp){
		if($scope.phonenumber){

			$ionicLoading.show();
		
			Api.FarmerResetPin_Conf($scope.phonenumber, otp).then(function(success){
			
			if (success.data.success === 1) {
				//$scope.phonenumber = phonenumber;
				//$scope.isStep1 = true;
				//console.log("success");
				var msg= 'We have sent new password to your register mobile no.';
				ionicSuperPopup.show("", msg , "success");
				$state.go('login');
			}
            else{
            	
                var msg= 'Invalid otp : ' + otp;// ionicSuperPopup.show("Basic Super Popup!");
                ionicSuperPopup.show("", msg , "error");   
                //console.log('error');
            }
			
        	$ionicLoading.hide();
			
			},
			function(error){
					ionicSuperPopup.show("Internet Issue", "Make sure Internet connection is on." , 'error');
	                $ionicLoading.hide();
	                //console.log("error ", error); 

			});
		}
			
	};
	
});