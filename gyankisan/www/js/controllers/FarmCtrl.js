// JavaScript Document
app.controller('FarmCtrl', function (Api, $state, $rootScope, $scope, $stateParams, ionicMaterialInk, $ionicActionSheet, $timeout,$ionicLoading, ionicSuperPopup) {

$scope.demoCaption1 = "Create a Farm";
$scope.demoCaption2 = "Farm Details"; 
$scope.demoCaption3 = "Edit / Delete Farm";  



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
      }
  };
  //$scope.test = "welcome to Farm";
  // var fab = document.getElementById('fab');
  //    fab.addEventListener('click', function () {
  //        location.href = '#/app/addfarm/registerFarm';
  //        //location.href = '#/tabs/registerFarm';
  //        //window.open('https://twitter.com/satish_vr2011', '_blank');
  //    });

  //Dummy data
  // $scope.farms = [
  //     {
  //         coordinate:null,
  //         district:"Adilabad",
  //         extent:"123",
  //         extent_type:"acres",
  //         id:"42",
  //         name:"Rice farm ddsdd sdsdsd sdsdsd",
  //         state:"Telangana",
  //         survey_number:"13ss",
  //         taluka:"Adilabad",
  //         village:"village"
  //     },
  //     {
  //         coordinate:null,
  //         district:"Adilabad",
  //         extent:"123",
  //         extent_type:"acres",
  //         id:"42",
  //         name:"Rice farm",
  //         state:"Telangana",
  //         survey_number:"13ss",
  //         taluka:"Adilabad",
  //         village:"village"
  //     },
  //     {
  //         coordinate:null,
  //         district:"Adilabad",
  //         extent:"123",
  //         extent_type:"acres",
  //         id:"42",
  //         name:"Rice farm",
  //         state:"Telangana",
  //         survey_number:"13ss",
  //         taluka:"Adilabad",
  //         village:"village"
  //     },
  //     {
  //         coordinate:null,
  //         district:"Adilabad",
  //         extent:"123",
  //         extent_type:"acres",
  //         id:"42",
  //         name:"Rice farm",
  //         state:"Telangana",
  //         survey_number:"13ss",
  //         taluka:"Adilabad",
  //         village:"village"
  //     },
  //     {
  //         coordinate:null,
  //         district:"Adilabad",
  //         extent:"123",
  //         extent_type:"acres",
  //         id:"42",
  //         name:"Rice farm",
  //         state:"Telangana",
  //         survey_number:"13ss",
  //         taluka:"Adilabad",
  //         village:"village"
  //     },
  //     {
  //         coordinate:null,
  //         district:"Adilabad",
  //         extent:"123",
  //         extent_type:"acres",
  //         id:"42",
  //         name:"Rice farm",
  //         state:"Telangana",
  //         survey_number:"13ss",
  //         taluka:"Adilabad",
  //         village:"village"
  //     }
  // ];
  //Dummy data


  $scope.$on("$ionicView.beforeEnter", function(){

        $ionicLoading.show();

        Api.Farms.GET($rootScope.token).then(function(response){
          
          if(response.data.success == 1){     
            $scope.farms = response.data.data;

            $timeout(function(){
      $scope.demoActive1 = true;
  }, 500);

          }

          console.log(response);
          $ionicLoading.hide();
        },
        function(error){
          console.log(error);
          $ionicLoading.hide();
        });
    
  });

  $scope.goto_addfarm = function(){
    location.href = '#/app/addfarm/registerFarm';
  };

  $scope.goto_cropList = function(f_name,f_dist){
    $rootScope.farm_details = {};
    $rootScope.farm_details.name = f_name;
    $rootScope.farm_details.district = f_dist;
    location.href = "#/app/crops/cropList";
  };

  $scope.show = function(n,as_text,as_edit,as_delete,as_cancel) {
    var hideSheet = $ionicActionSheet.show({
      titleText: as_text + " " +n,
      buttons: [
        { text: '<i class="icon ion-edit balanced"></i>' + as_edit }
      ],
      destructiveText: '<i class="icon ion-trash-a assertive"></i>' + as_delete,
      cancelText: as_cancel,
      cancel: function() {
        console.log('CANCELLED');
      },
      buttonClicked: function(index) {

        if(index == 0){
            $rootScope.temp_farm_id = n;
            location.href = "#/app/addfarm/registerFarm";//  ('app.addfarm.registerFarm');
            return true;
        }

      },
      destructiveButtonClicked: function() {
        console.log('DESTRUCT');
        ionicSuperPopup.show({
            title: "Are you sure?",
            text: "Do you want to delete this farm?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",confirmButtonText: "Yes",
            cancelButtonText: "No",
            closeOnConfirm: true,
            closeOnCancel: true },
            function(isConfirm){
            if (isConfirm) {
                $ionicLoading.show();                
                Api.Farms.DELETE($rootScope.token, n).then(function(response){
                  
                  if(response.data.success == 1){     
                    ionicSuperPopup.show("", "Farm Deleted Successfully", "success");
                    $state.transitionTo($state.current, $stateParams, {
                        reload: true,
                        inherit: false,
                        notify: true
                    });
                  }

                  console.log(response);
                  $ionicLoading.hide();
                },
                function(error){
                  console.log(error);
                  $ionicLoading.hide();
                });

            } else {
                // ionicSuperPopup.show("Cancelled", "Pew, you totally didn't do anything!", "error");
                return true;
            }
        });
        return true;
      }
    });    
 
    // For example's sake, hide the sheet after two seconds
    // $timeout(function() {
    //  hideSheet();
    // }, 5000);

 };

});