// JavaScript Document
app.controller('TranslateCtrl', function ($scope, $stateParams, ionicMaterialInk, $translate) {

	$scope.test = "welcome to Guest";

    $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };


});