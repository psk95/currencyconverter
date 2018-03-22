'use strict';

var currencyService = angular.module('currency-service', []);







currencyService.service('CurrencyService', function ($http, $rootScope,ENV) {

	var servicePath = ENV.apiEndpoint;






	//save records

	this.saveRecords = function (amount,tovalue,fromvalue,convertedvalue,timestamp,tech) {
		return $http({
			method: 'POST',
			url: servicePath+'records',
			//url: 'demo-files/login-status.json',
			data: {'amount':amount,'tovalue': tovalue,'fromvalue':fromvalue,'convertedvalue':convertedvalue,"date":timestamp,"uname":tech},
			headers: {'Content-Type': 'application/json;'}
		});
	};





	//login
	this.userLogin = function (email,password) {
		return $http({
			method: 'POST',
			url: servicePath+'login',
			//url: 'demo-files/login-status.json',
			data: {'email':email,'password': password},
			headers: {'Content-Type': 'application/json;'}
		});
	};
    



    //sign-up
    this.registerUserData = function(userData) {
		return $http({
			method: 'POST',
			url: servicePath+'register',
			data: userData,
			headers: {'Content-Type': 'application/json;'}
		})
	}




var email

 this.getRecords = function (email) {
		return $http({
			method: 'GET',
			//url: 'demo-files/farmer_sample.json',
			url: servicePath+'getRecords/'+email,
			headers: {'Content-Type': 'application/json; charset=utf-8'}
		})
	}


	this.SetCredentials = function (email) {
		// Store Globlal Value
		$rootScope.email =  email;
				
            
	
		// Store token
		//$http.defaults.headers.common['X-Auth-Token'] = token;
		// Store in Cookie
		//$cookieStore.put('globals', $rootScope.globals);
	}


});
