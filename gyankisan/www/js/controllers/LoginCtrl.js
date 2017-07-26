// JavaScript Document
app.controller('LoginCtrl', function ($scope, $rootScope, $state, Api, $location, $stateParams, ionicMaterialInk, $translate, $ionicLoading,ionicSuperPopup) {

	$scope.test = "welcome to Angularjs";
	$scope.changeLanguage = function (langKey) {
    	$translate.use(langKey);
      localforage.setItem('lang', langKey);
  };

    $scope.farmLogin = function(userdata){

        $ionicLoading.show();
        Api.FarmerLogin(userdata).then(function(success){

            if (success.data.success === 1) {

                //login for notification
                if(window.cordova)
                {
                    console.log('----- start notification work -----');
                        
                        $scope.ouruserdata = {};
                        $scope.ouruserdata.username = userdata.phonenumber;
                        $scope.ouruserdata.password = userdata.pinnumber;
                        $scope.ouruserdata.device_id = $rootScope.registrationId;
                        $scope.ouruserdata.device_info = device;

                        console.log('device_info', device);
                        Api.check_login_farmer($scope.ouruserdata).then(function(success){
                            console.log(success);
                            localforage.setItem('user_id',success.data.data).then(console.log);
                        },
                        function(error){
                            ionicSuperPopup.show("Login failed", "Make sure Internet connection is on." , 'error');
                            console.log("error ", error);
                        });

                    console.log('----- end notification work -----');
                }
                //end login for notification


                $rootScope.token = success.data.data.token;
                console.log(success);  
                var msg= 'Successful';
                ionicSuperPopup.show("", msg , "success");
                localforage.setItem('farm_token',success.data.data.token).then(console.log);
                //console.log('success');
                $location.path('app/home');
            }
            else{

                var msg= 'Invalid Mobile no and Pin';// ionicSuperPopup.show("Basic Super Popup!");
                ionicSuperPopup.show("", msg , "error");   
                //console.log('error');
            }

            $ionicLoading.hide();

                //console.log("success ", success);
        },
        function(error){
                ionicSuperPopup.show("Login failed", "Make sure Internet connection is on." , 'error');
                $ionicLoading.hide();
                //console.log("error ", error);
        });
    };



});

