'use strict';
var currencyontroller = angular.module('currency-controller', []);

currencyontroller.controller('CurrencyCtrl', function ($http,$scope,$window,$rootScope,$location,CurrencyService) {
	


    //register
	$scope.registeruserData = function(currency) {

           var setcompanydata = {};
           $scope.issaving = true;
			setcompanydata.email = currency.email;
			setcompanydata.password = currency.password;
			setcompanydata.name = currency.name;
			setcompanydata.dob = selected;
			setcompanydata.address = currency.address;
			setcompanydata.postcode = currency.postcode;
			setcompanydata.city = currency.city;
			setcompanydata.country = currency.country;	

          
	  	 $scope.userdataJson = angular.toJson(setcompanydata); //convert to json

		CurrencyService.registerUserData($scope.userdataJson).then(function(resp) {
            //toaster.pop('success',"",'User registered Successfully');
						$window.location.href = 'index.html';
						alert("success")
        }).catch(function(error) {
						$scope.issaving = false;
           // toaster.pop('error', "", "There is some error to register user..!!");
        })
	
		
	}



   //convert
   $scope.convert = function(dashboard) {
		
	var convertData = {};
	convertData.amount = dashboard.amount;
	convertData.toValue = dashboard.toValue;
     convertData.fromValue = dashboard.fromValue;

	   var url='http://apilayer.net/api/historical?access_key=5ee6392357b8f3f8813a7310034e5efd&date=2018-03-12&currencies=EUR,USD,GBP,NZD,AUD,JPY,INR,HUF,RUB,THB&format=1'
     
       $http.post(url).success(function (data, json) {

		$scope.base="USD"+convertData.fromValue;
        $scope.date=data.timestamp;
	
				// set currency to convert to
		$scope.destination="USD"+convertData.toValue
        $scope.c_date=$scope.date+"000"
				

		// var timestamp = $scope.date
		// var date = new Date(timestamp * 1000);
		// var datevalues = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear() + ' ' ;
		// $scope.bdatetime = datevalues;
				
        $scope.amount=convertData.amount;
        $scope.converted_amount=($scope.amount/data.quotes[$scope.base])*data.quotes[$scope.destination];
        CurrencyService.saveRecords($scope.amount,$scope.base,$scope.destination,$scope.converted_amount,$scope.c_date,tech).then(function (response) {
		if (response.status == 200) {
					
				}
				}).catch(function (error) {
					//toaster.pop('error',"","Invalid Credentials");
					
				})

	})
}


var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('?'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};


	var tech = getUrlParameter('uname');
    $scope.target = $location.search()['uname'];

	CurrencyService.getRecords(tech).success(function (data) {
              
              $scope.records =data.records;
             

		}).error(function (error) {
			//throw error;
			console.error('ERROR OCCURED:', +error);
		})



    //login
	$scope.login = function (login) {

			$scope.uname=login.uname;
			$scope.password=login.password;
			
			CurrencyService.userLogin($scope.uname,$scope.password).then(function (response) {

				if (response.status == 200) {

					$window.location.href = 'dashboard.html?uname='+$scope.uname;
					//myService.set($scope.email);
					
					alert("Login Successful")
					
				}
				}).catch(function (error) {
					alert("Invalid Credientials")
				})
	}

})



