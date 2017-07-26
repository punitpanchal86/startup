// JavaScript Document
app.controller('RegisterFarmCtrl', function (Api, $state, $rootScope, $scope, $stateParams, ionicMaterialInk,$ionicLoading,ionicSuperPopup) {

	$scope = $scope.$parent;
	//$scope.test = "welcome to RegisterFarm";
	$scope.$on("$ionicView.beforeEnter", function(){
		// console.log($rootScope.temp_farm_id);

		$rootScope.update = false;
		if($rootScope.temp_farm_id){
			$ionicLoading.show();
			Api.Farms.GET($rootScope.token, $rootScope.temp_farm_id).then(function(response){
				
				if(response.data.success === 1)
				{
					$scope.farm = response.data.data;
					$rootScope.update = $rootScope.temp_farm_id;
					$rootScope.temp_farm_id = '';

					var selected_state = response.data.data.state;

					$ionicLoading.show();
					Api.Areas().then(function(response){

						if(response.data.success === 1)
						{
							$scope.areas = response.data.data;
							$scope.states = [];
							angular.forEach($scope.areas, function(value, key) {
								$scope.states.push(key);
							});

							$scope.get_district($scope.farm.state);
						}
						else
						{
							console.log("error Areas");
						}
						
						console.log(response);
						$ionicLoading.hide();

					},function(error){
						$ionicLoading.hide();
					});
				}
				else
				{
					var msg= 'Not able to load a farm data';
					ionicSuperPopup.show("", response.data.error.messages , "error");
					$ionicLoading.hide();
				}
				

			}, function(error){
				ionicSuperPopup.show("Farm Failed", "Make sure Internet connection is on." , 'error');
				console.log(error);
				$ionicLoading.hide();
			});
		}
		else{

			//get state here
			$scope.states = [
				'telangana'
			];
			// $ionicLoading.show();
			// Api.Areas().then(function(response){

			// 	if(response.data.success === 1)
			// 	{
			// 		$scope.areas = response.data.data;
			// 		$scope.states = [];
			// 		angular.forEach($scope.areas, function(value, key) {
			// 			$scope.states.push(key);
			// 		});
			// 	}
			// 	else
			// 	{
			// 		console.log("error Areas");
			// 	}
				
			// 	console.log(response);
			// 	$ionicLoading.hide();

			// },function(error){
			// 	$ionicLoading.hide();
			// });
		}

	});





	$scope.farmRegister = function(farmdata){

		// farmdata.state = $scope.farm.state.state_key;
		// farmdata.district = $scope.farm.district.district_key;
		// farmdata.taluka = $scope.farm.taluka;

		if($rootScope.update)
		{
			$ionicLoading.show();
			console.log("submit", farmdata);
			farmdata.agro_climatic_zone = '_';
			Api.Farms.PUT($rootScope.token, farmdata, $rootScope.update).then(function(response){
				if(response.data.success === 1)
				{
					var msg = "Farm Updated Successful";
					ionicSuperPopup.show("", msg , "success");
					$state.go('app.farm');
				}
				else
				{
					var msg= 'Not able to Update a farm';
					ionicSuperPopup.show("", msg , "error");
				}
				
				console.log(response);
				$ionicLoading.hide();

			},function(error){
				 ionicSuperPopup.show("Farm Failed", "Make sure Internet connection is on." , 'error');
				console.log(error);
				$ionicLoading.hide();
			});
		}
		else
		{
			$ionicLoading.show();
			
			farmdata.agro_climatic_zone = '';
			Api.Farms.POST($rootScope.token, farmdata).then(function(response){
				if(response.data.success === 1)
				{
					var msg = "Farm Created Successful";
					ionicSuperPopup.show("", msg , "success");
					$state.go('app.farm');
				}
				else
				{
					var msg= "Not able to create a farm";
					ionicSuperPopup.show("", msg , "error");
				}
				
				console.log(response);
				$ionicLoading.hide();

			},function(error){
				 ionicSuperPopup.show("Farm Failed", "Make sure Internet connection is on." , 'error');
				console.log(error);
				$ionicLoading.hide();
			});
		}
		
	}

	

	
	


	// $scope.get_state = function(state){
	// 	angular.forEach($scope.areas, function(value, key) {
	// 		$scope.states.push(key);
	// 	});

	// 	$scope.get_district(state);
	// };

	$scope.get_district = function(state){
		$scope.districts = [];
		$ionicLoading.show();
		Api.Areas(state).then(function(response){

			if(response.data.success === 1)
			{
				$scope.areas = response.data.data;
				$scope.districts = _.keys($scope.areas.districts);
			}
			else
			{
				console.log("error Areas");
			}
			
			console.log(response);
			$ionicLoading.hide();

		},function(error){
			$ionicLoading.hide();
		});
	};

	$scope.get_taluka = function(dist){
		$scope.talukas = [];
		$scope.talukas = _.keys($scope.areas.districts[dist].talukas);
		$scope.agrozone = $scope.areas.districts[dist].agrozone;
		console.log($scope.areas.districts[dist].talukas);
	};

	$scope.get_village = function(dist, taluka){
		$scope.villages = [];
		$scope.villages = $scope.areas.districts[dist].talukas[taluka];
		console.log($scope.areas.districts[dist].talukas[taluka]);
	};

	// $scope.get_agrozone = function(){
		
	// };



});