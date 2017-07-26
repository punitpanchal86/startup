app.controller('MyinfoCtrl', function($scope, $state, Api, $ionicLoading, $rootScope, ionicSuperPopup){
	// $ionicLoading.show();

	$scope.$on("$ionicView.beforeEnter", function(){
		$ionicLoading.show();

		Api.MyInformation.GET($rootScope.token).then(function(response){
			
			if(response.data.success == 1){			
				$scope.myinfo = response.data.data;
			}

			console.log(response.data);
			$ionicLoading.hide();
		},
		function(error){
			console.log(error);
			$ionicLoading.hide();
		});
	});


	$scope.submit_myinfo = function(data){

		$ionicLoading.show();
		Api.MyInformation.PUT($rootScope.token, data).then(function(response){
			
			if(response.data.success == 1){
				ionicSuperPopup.show("", "Updated Successful!", "success");				
			}
			else
			{
				ionicSuperPopup.show("", "Something went wrong.Please try again", "error");
			}

			console.log(response);
			$ionicLoading.hide();
		},
		function(error){
			ionicSuperPopup.show("Unsuccessful!", 'Make sure internet connection is on.', "error"); 
			$ionicLoading.hide();
		});
	};

});