angular.module('gyan.services', [])

.factory('Api', function($http, $httpParamSerializerJQLike){


	var server_url = 'http://ws.gyankisan.com/';



// START : Login,Logout and Reset Pin, Confirmation pin for CA and Farmers-----------------------------------------------------------

	var calogin = function(userdata){

		return  $http({
		            method: 'POST',
		    		headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		            url: server_url + 'login.php',
		            data: $httpParamSerializerJQLike({
			                'uid': userdata.phonenumber,
			                'pass': userdata.pinnumber,
			                'application': '2'
		            })
		        });//http
	};//login


	var flogin = function(userdata){

		return  $http({
		            method: 'POST',
		    		headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		            url: server_url + 'login.php',
		            data: $httpParamSerializerJQLike({
			                'uid': userdata.phonenumber,
			                'pass': userdata.pinnumber,
			                'application': '1'
		            })
		        });//http
	};//flogin


	var calogout = function(farmtoken){

		return $http({
	                method: 'POST',
	                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	                url: server_url + 'logout.php',
	                data: $httpParamSerializerJQLike({
	                        'token': farmtoken,
	                        'application' : '2'
                	})
            	});//http
	};//calogout


	var flogout = function(farmtoken){

		return $http({
	                method: 'POST',
	                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	                url: server_url + 'logout.php',
	                data: $httpParamSerializerJQLike({
	                        'token': farmtoken,
	                        'application' : '1'
                	})
            	});//http
	};//flogout


	var caresetpin = function(mobileno){

		return $http({
	                method: 'POST',
	                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	                url: server_url + 'reset_pass.php',
	                data: $httpParamSerializerJQLike({
	                        'phone': mobileno,
	                        'application' : '2'
                	})
            	});//http
	};//caresetpin


	var fresetpin = function(mobileno){

		return $http({
	                method: 'POST',
	                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	                url: server_url + 'reset_pass.php',
	                data: $httpParamSerializerJQLike({
	                        'phone': mobileno,
	                        'application' : '1'
                	})
            	});//http
	};//fresetpin


	var caresetpin_conf = function(mobileno,otp){

		return $http({
	                method: 'POST',
	                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	                url: server_url + 'reset_pass.php',
	                data: $httpParamSerializerJQLike({
	                        'phone': mobileno,
	                        'otp' : otp,
	                        'application' : '2'
                	})
            	});//http
	};//caresetpin_conf


	var fresetpin_conf = function(mobileno,otp){

		return $http({
	                method: 'POST',
	                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	                url: server_url + 'reset_pass.php',
	                data: $httpParamSerializerJQLike({
	                        'phone': mobileno,
	                        'otp' : otp,
	                        'application' : '1'
                	})
            	});//http
	};//fresetpin_conf

// End : Login,Logout and Reset Pin, Confirmation pin for CA and Farmers-----------------------------------------------------------


// START : MY_INFORMATION-----------------------------------------------------------

	var get_my_information = function(token){
		return $http({
            method: 'GET',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            url: server_url + 'my_information.php?token=' + token,
            data: {}
    	});
	}//get_my_information


	var put_my_information = function(token, data){
		return $http({
            method: 'PUT',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            url: server_url + 'my_information.php?token=' + token,
            data: $httpParamSerializerJQLike(data)
    	});
	}//get_my_information

// END : MY_INFORMATION-----------------------------------------------------------


// START : CA - FARMERS DETAIL-----------------------------------------------------------

	var get_farmers = function(token, id){
		if(id){
			return $http({
	            method: 'GET',
	            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	            url: server_url + 'farmer.php/'+ id + '?token=' + token,
	            data: {}
	    	}); // for CA
		}
		else
		{
			return $http({
	            method: 'GET',
	            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	            url: server_url + 'farmer.php?token=' + token,
	            data: {}
	    	}); // For Farmer
		}
	}//get_farmers


	var post_farmers = function(token, data){
		return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            url: server_url + 'farmer.php?token=' + token,
            data: $httpParamSerializerJQLike(data)
    	});
	}//post_farmers


	var put_farmers = function(token, data, id){
		if(id)
		{
			return $http({
	            method: 'PUT',
	            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	            url: server_url + 'farmer.php/'+ id + '?token=' + token,
	            data: $httpParamSerializerJQLike(data)
	    	});
		}
		else
		{

			return $http({
	            method: 'PUT',
	            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	            url: server_url + 'farmer.php?token=' + token,
	            data: $httpParamSerializerJQLike(data)
	    	});
		}
	}//put_farmers


	var delete_farmers = function(token, id){
		return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            url: server_url + 'farmer.php/'+ id + '?token=' + token,
            data: {}
    	});
	}//delete_farmers

	var get_farms_by_ca = function(token, farmer_id){
		
		return $http({
            method: 'GET',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            url: server_url + 'farm.php?farmer=' + farmer_id + '&token=' + token,
            data: {}
    	});

	}//get_farms

// END : CA - FARMERS DETAIL-----------------------------------------------------------


// START : FARM DETAILS for farmers----------------------------------------------------
	
	//For Farm
	var get_farms = function(token, id){
		if(id){
			return $http({
	            method: 'GET',
	            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	            url: server_url + 'farm.php/'+ id + '?token=' + token,
	            data: {}
	    	});
		}
		else
		{
			return $http({
	            method: 'GET',
	            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	            url: server_url + 'farm.php?token=' + token,
	            data: {}
	    	});
		}
	}//get_farms

	var post_farms = function(token, data){
		return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            url: server_url + 'farm.php?token=' + token,
            data: $httpParamSerializerJQLike(data)
    	});
	}//post_farms

	var put_farms = function(token, data, id){
		
		return $http({
            method: 'PUT',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            url: server_url + 'farm.php/'+ id + '?token=' + token,
            data: $httpParamSerializerJQLike(data)
    	});
		
		
	}//put_farms

	var delete_farms = function(token, id){
		return $http({
            method: 'DELETE',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            url: server_url + 'farm.php/'+ id + '?token=' + token,
            data: {}
    	});
	}//delete_farms


	var areas = function(state){
		return $http({
            method: 'GET',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            url: server_url + 'get_administrative_areas.php?state=' + state,
            data: {}
    	});
	}//delete_farms



// End : FARM DETAILS for farmers----------------------------------------------------


// START : Crop List ----------------------------------------------------------------

	var post_crops = function(data){
		return $http({
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            url: server_url + 'get_crops_by_district.php',
            data: $httpParamSerializerJQLike({'district':data})
    	});
	}//post_farms

// End : Crop List ------------------------------------------------------------------	
	


// START : Notifications ----------------------------------------------------------------
	var our_server_url = 'https://www.mystudycentre.com/app/gyan/api.php';

	var check_login_farmer = function(userdata){
		return  $http({
            method: 'POST',
    		headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            url: our_server_url,
            data: $httpParamSerializerJQLike({
            	'method' : 'check_login_farmer',
                'username': userdata.username,
                'password': userdata.password,
                'device_id': userdata.device_id,
                'device_info' : userdata.device_info
            })
        });//http
	}//check_login

	var get_notifications = function(user_id){
		return $http({
            method: 'POST',
    		headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            url: our_server_url,
            data: $httpParamSerializerJQLike({
            	'method' : 'get_notifications',
            	'user_id' : user_id
            })
        });//http
	}//get_notifications

// End : Notifications ------------------------------------------------------------------	



	var _my_information = {
		GET : get_my_information,
		PUT : put_my_information
	};

	var _farmers = {
		GET  : get_farmers,
		POST : post_farmers,
		PUT  : put_farmers,
		DELETE : delete_farmers
	};

	var _farms = {
		GET  : get_farms,
		POST : post_farms,
		PUT  : put_farms,
		DELETE : delete_farms
	};

	var _crops = {
		POST : post_crops
	};


	return {
		CaLogin : calogin,
		FarmerLogin : flogin,
		CaLogout : calogout,
		FarmerLogout : flogout,
		CaResetPin : caresetpin,
		FarmerResetPin  : fresetpin,
		CaResetPin_Conf : caresetpin_conf,
		FarmerResetPin_Conf  : fresetpin_conf,
		MyInformation : _my_information,
		Farmers : _farmers,
		Farms : _farms,
		Areas : areas,
		CropsList : _crops,
		check_login_farmer : check_login_farmer,
		get_notifications : get_notifications

	};


});
