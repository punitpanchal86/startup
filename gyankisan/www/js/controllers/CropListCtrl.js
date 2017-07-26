// JavaScript Document
app.controller('CropListCtrl', function (Api,$scope, $rootScope, $stateParams, ionicMaterialInk) {

	$scope = $scope.$parent; 
	//$scope.test = "welcome to CropList";
	$scope.$on("$ionicView.beforeEnter", function(){
		$scope.farm = $rootScope.farm_details;
		$rootScope.farm_details = "";


		Api.CropsList.POST($scope.farm.district).then(function(response){
			if(response.data.success == 1){     
            	$scope.crop_details = response.data.data;
          	}
          	else
          	{

          	}

          console.log(response);
          //$ionicLoading.hide();

		},
		function(error){
          console.log(error);
          //$ionicLoading.hide();
        });

	});
});