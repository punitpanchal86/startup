app.controller('AppCtrl', function ($scope,Api,$http,$httpParamSerializerJQLike,$location, $ionicModal, $ionicPopover, $timeout,$ionicLoading,ionicSuperPopup) {
    // Form data for the login modal
    $scope.loginData = {};

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    }

    $scope.goto = function(name){
        $state.go(name);
    };
    
    $ionicPopover.fromTemplateUrl('my_popup.html', {
        scope: $scope
    }).then(function(popover) {
        $scope.popover = popover;
    });
    
    $scope.closePopover = function () {
        $scope.popover.hide();
    };

    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.popover.remove();
    });

  
  
        $ionicModal.fromTemplateUrl('my-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
        }).then(function(modal) {
        $scope.modal = modal;
        });
        $scope.openModal = function() {
        $scope.modal.show();
        };
        $scope.closeModal = function() {
        $scope.modal.hide();
        };
        // Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
        $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function() {
        // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function() {
        // Execute action
        });



    $scope.farmLogout= function(){
        $ionicLoading.show();

        localforage.getItem('farm_token').then(function(readValue) {
            
            var farm_token = readValue;

            Api.FarmerLogout(farm_token).then(function(success){

                if (success.data.success === 1) {
                    localforage.removeItem('farm_token'); 
                    $scope.closePopover();
                    $timeout(function(){
                        $ionicLoading.hide();  
                    }, 3000);
                   
                    //console.log(success);
                    $location.path('login');
                }
                else{
                    var msg= 'Something went wrong!';// ionicSuperPopup.show("Basic Super Popup!");
                    ionicSuperPopup.show("Logout Failed!", msg , "error");   
                    //console.log(success);
                    $ionicLoading.hide();
                }

                $ionicLoading.hide();

            }, function(error){
                    var msg= 'Something went wrong! Make sure internet connection is on.';// ionicSuperPopup.show("Basic Super Popup!");
                    ionicSuperPopup.show("Logout Failed!", msg , "error");   
                    //console.log(error);
                    $ionicLoading.hide();
            });

        });
    };
});

