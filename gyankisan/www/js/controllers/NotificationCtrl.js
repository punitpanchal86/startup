app.controller('NotificationCtrl', function ($scope, Api, $location, $ionicModal, $timeout,$ionicLoading,ionicSuperPopup) {
	$scope.user_id = localforage.getItem('user_id');

	$scope.notifications = {};

	$ionicLoading.show();
	Api.get_notifications($scope.user_id).then(function(response){
        console.log('notifications', response);
        $scope.notifications = response.data.data;
        $ionicLoading.hide();
    },
    function(error){
        $ionicLoading.hide();
        ionicSuperPopup.show("Somethin went wrong", "while fetching notifications." , 'error');
        console.log("error ", error);
    });
});