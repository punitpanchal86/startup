// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
    var translationsEN = {
      LANGUAGE: 'English',   
      MOBILE_NUMBER: 'Mobile No.',
      PIN: 'Pin',
      SUBMIT: 'Login',
      GUEST: 'Guest Login',
      GUEST1: 'Guest',
      FORGOTTEN_PASSWORD: 'FORGOTTEN PIN?',
      BUTTON_LANG_HI: 'हिंदी',
      BUTTON_LANG_EN: 'English',
      BUTTON_LANG_TE: 'తెలుగు', 
      DIGIT: 'Digit',
      MERE: 'My', 
      MERA: 'My',
      MERY: 'My',
      INFORMATION: 'Information',
      CROPS: 'Crops',
      EXPENSES: 'Expenses',
      CALENDAR: 'Calendar',
      ORDER: 'Order',
      EXPENSE_HISTORY: 'Expense History',
      HOME: 'Home',
      FARM: 'Farm List',
      DELETE: 'Delete',
      EDIT: 'Edit',
      CANCEL: 'Cancel',
      LOGOUT: 'Logout',
      LANGUAGES: 'Languages',
      MODIFYFARM: 'Modify Your Farm',
      SEASON1: 'Kharif',
      SEASON2: 'Rabi',
      ACRES: 'Acres',
      AADHAR_NUMBER: 'Aadhar No.',
      ENTER_YOUR: 'Enter your',
      FARMER_NAME: 'Farmer Name',
      HERE: 'Here',
      ADDRESS : 'Address',

      WELCOME_FARMER : 'Welcome Farmer',
      FARMER_LOGIN : 'Farmer Login',
      REQUIRED : 'is required.',
      LENGTH : 'Length should be ',

      MESSAGING : 'Messaging',
      FPO_OFFERING : 'FPO Offering',

    };
     
    var translationsHindi= {
      LANGUAGE : 'हिंदी',  
      MOBILE_NUMBER: 'मोबाइल नंबर',
      PIN: 'पिन',
      SUBMIT: 'लॉग इन करें',
      GUEST: 'मेहमान लॉगइन करें',
      GUEST1: 'मेहमान लॉगइन',
      FORGOTTEN_PASSWORD: 'पिन भूल गए?',
      BUTTON_LANG_HI: 'हिंदी',
      BUTTON_LANG_EN: 'English',
      BUTTON_LANG_TE: 'తెలుగు', 
      DIGIT: 'अंक',
      MERE: 'मेरे', 
      MERA: 'मेरा',
      MERY: 'मेरी',
      INFORMATION: 'जानकारी',
      CROPS: 'फसल',
      EXPENSES: 'खर्च',
      CALENDAR: 'पंचांग',
      ORDER: 'खरीद',
      EXPENSE_HISTORY: 'खर्च इतिहास',
      HOME:'घर',
      FARM: 'फार्म सूची',
      DELETE: 'इसे मिटाओ',
      EDIT: 'संपादित करें',
      CANCEL: 'इसे रद्द करें',
      LOGOUT: 'लोग आउट',
      LANGUAGES: 'भाषा',
      MODIFYFARM: 'अपने फार्म को संशोधित करें',
      SEASON1: 'खरीफ',
      SEASON2: 'रबी',
      ACRES: 'एकड़',
      AADHAR_NUMBER: 'आधार नंबर',
      ENTER_YOUR: 'अपना',
      NAME: 'नाम',
      HERE: 'यहाँ दर्ज करें',

      WELCOME_FARMER : 'आपका स्वागत है किसान',
      FARMER_LOGIN : 'किसान लॉगिन',
      REQUIRED : 'आवश्यक है। ',
      LENGTH : 'लंबाई होना चाहिए',

      MESSAGING : 'संदेश',
      FPO_OFFERING : 'एफपीओ प्रस्ताव',

    };

    var translationsTelugu = {
      LANGUAGE: 'తెలుగు',   
      MOBILE_NUMBER: 'మొబైల్ సంఖ్య',
      PIN: 'పిన్',
      SUBMIT: 'లాగిన్',
      GUEST: 'అతిథి లాగిన్',
      GUEST1: 'గెస్ట్',
      FORGOTTEN_PASSWORD: 'PIN ను మర్చిపోతున్నారా?',
      BUTTON_LANG_HI: 'हिंदी',
      BUTTON_LANG_EN: 'English',
      BUTTON_LANG_TE: 'తెలుగు', 
      DIGIT: 'అంకెల',
      MERE: 'నా', 
      MERA: 'నా',
      MERY: 'నా',
      INFORMATION: 'సమాచారం',
      CROPS: 'పంటలు',
      EXPENSES: 'ఖర్చులు',
      CALENDAR: 'క్యాలెండర్',
      ORDER: 'ఆర్డర్',
      EXPENSE_HISTORY: 'ఖర్చు చరిత్ర',
      HOME: 'హోమ్',
      FARM: 'ఫార్మ్ లిస్ట్',
      DELETE: 'తొలగించండి',
      EDIT: 'మార్చు',
      CANCEL: 'రద్దు',
      LOGOUT: 'లాగ్అవుట్',
      LANGUAGES: 'భాషలు',
      MODIFYFARM: 'మీ ఫార్మ్ను సవరించండి',
      SEASON1: 'ఖరీఫ్',
      SEASON2: 'రబీ',
      ACRES: 'ఎకరాల',
      AADHAR_NUMBER: 'ఆధార్ సంఖ్య',
      ENTER_YOUR: 'మీ నమోదు చేయండి',
      NAME: 'పేరు',
      HERE: 'ఇక్కడ',

      WELCOME_FARMER : 'స్వాగతం రైతు',
      FARMER_LOGIN : 'రైతు లాగిన్',
      REQUIRED : 'అవసరం.',
      LENGTH : 'పొడవు ఉండాలి ',

      MESSAGING : 'మెసేజింగ్',
      FPO_OFFERING : 'FPO ఆఫరింగ్',

    };


var app = angular.module('starter', ['ionic', 'gyan.services', 'ionic-material','ui.mask','ngMessages','pascalprecht.translate','cera.ionicSuperPopup']);

app.run(function ($ionicPlatform,$rootScope, $translate,$location) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
            StatusBar.backgroundColorByHexString("#659048");
        }

        

        localforage.getItem('lang').then(function(readValue) {
          $translate.use(readValue);
        });

        localforage.getItem('farm_token').then(function(readValue) {
          if(readValue){
            $rootScope.token = readValue;
            $location.path('app/home');
          }
          else
          {
            $location.path('login'); 
          }
           // $ionicLoading.hide();
        });

        var push = PushNotification.init({"android": {"senderID": "788378834525"}});

        push.on('registration', function(data) {
          console.log(data.registrationId);
          $rootScope.registrationId =data.registrationId;
          console.log($rootScope.fcmToken);
        });

        push.on('notification', function(data) {
          alert(data.title+' Message:' +data.message);
        });

        push.on('error', function(e) {
          alert(e);
        });
    });
})

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
	
	.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })


  .state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            }
        }
    })

  .state('app.notification', {
      url: '/notification',
      views: {
          'menuContent': {
              templateUrl: 'templates/notification.html',
              controller: 'NotificationCtrl'
          }
      }
  })
  
  .state('app.myinfo', {
        url: '/myinfo',
        views: {
            'menuContent': {
                templateUrl: 'templates/myinfo.html',
                controller: 'MyinfoCtrl'
            }
        }
    })

  .state('app.farmerInfo', {
        url: '/farmerInfo',
        views: {
            'menuContent': {
                templateUrl: 'templates/farmerInfo.html',
                controller: 'FarmerInfoCtrl'
            }
        }
    })

  .state('app.farm', {
        url: '/farm',
        views: {
            'menuContent': {
                templateUrl: 'templates/farm.html',
                controller: 'FarmCtrl'
            }
        }
    })

   
  .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
    })

  .state('forgetpin', {
        url: '/forgetpin',
        templateUrl: 'templates/forgetpin.html',
        controller: 'ForgetpinCtrl'
    })

  .state('app.guest', {
        url: '/guest',
        views: {
            'menuContent': {
                templateUrl: 'templates/guest.html',
                controller: 'GuestCtrl'
            }
        }
    })

  .state('app.addfarm', {
        url: '/addfarm',
        views: {
            'menuContent': {
                templateUrl: 'templates/addfarm.html',
            }
        }
    })

  .state('app.addfarm.registerFarm', {
        url: '/registerFarm',
        views: {
            'fregister-page': {
                templateUrl: 'templates/registerfarm.html',
                controller: 'RegisterFarmCtrl'
            }
        }
    })

  .state('app.addfarm.registerMap', {
        url: '/registerMap',
        views: {
            'fcrops-page': {
                templateUrl: 'templates/registermap.html',
                controller: 'RegisterMapCtrl'
            }
        }
    })

  .state('app.crops', {
        url: '/crops',
        views: {
            'menuContent': {
                templateUrl: 'templates/crops.html',
                controller: 'CropsCtrl'
            }
        }
    }) 

  .state('app.crops.cropList', {
        url: '/cropList',
        views: {
            'fcrops-page': {
                templateUrl: 'templates/cropslist.html',
                controller: 'CropListCtrl'
            }
        }
    }) 

  .state('app.crops.shortList', {
        url: '/shortList',
        views: {
            'fcrops-page': {
                templateUrl: 'templates/shortlist.html',
                controller: 'ShortListCtrl'
            }
        }
    }) 

  .state('app.crops.growList', {
        url: '/growList',
        views: {
            'fcrops-page': {
                templateUrl: 'templates/growlist.html',
                controller: 'GrowListCtrl'
            }
        }
    }) 

     
});

app.config(['uiMask.ConfigProvider', function(uiMaskConfigProvider) {
  uiMaskConfigProvider.maskDefinitions({'A': /[a-z]/, '*': /[a-zA-Z0-9]/});
  uiMaskConfigProvider.clearOnBlur(false);
  uiMaskConfigProvider.eventsToHandle(['input', 'keyup', 'click']);
}]);


app.config(['$translateProvider', function($translateProvider) {
      // add translation table
    $translateProvider.translations('en', translationsEN);      // "en" Code for English
    $translateProvider.translations('hi', translationsHindi);   // "hi" Code for Hindi
    $translateProvider.translations('te', translationsTelugu);   // "te" Code for Telugu 
    $translateProvider.preferredLanguage('en');
    $translateProvider.fallbackLanguage('en');

}]);

