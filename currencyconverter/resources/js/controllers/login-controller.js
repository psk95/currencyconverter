'use strict';
var loginController = angular.module('login-controller', []);

loginController.controller('LoginCtrl', function ($http,$scope,$window,$stateParams,$rootScope,$location,CurrencyService) {
	

    var selected
    $( "#datepicker" ).datepicker({ dateFormat: "yy-mm-dd" });
    $("#datepicker").on("change",function(){
         selected = $(this).val();
        
    });
	


	//register

	$scope.registeruserData = function(currency) {

           var setuserdata = {};
           $scope.issaving = true;
			setuserdata.uname = currency.uname;
			setuserdata.password = currency.password;
			setuserdata.name = currency.name;
			setuserdata.dob = selected;
			setuserdata.address = currency.address;
			setuserdata.postcode = currency.postcode;
			setuserdata.city = currency.city;
			setuserdata.country = currency.country;	

	  	    $scope.userdataJson = angular.toJson(setuserdata); //convert to json

		CurrencyService.registerUserData($scope.userdataJson).then(function(resp) {
						$window.location.href = 'index.html';
						alert("success")
        }).catch(function(error) {
						$scope.issaving = false;
           
        })
	}
})


