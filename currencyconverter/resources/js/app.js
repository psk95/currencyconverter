"use strict";

	var currencyApp = angular.module('currencyApp', [
		
		'config',
		'ui.router',
		
		
		'currencyApp.controllers',
		'currencyApp.services',
		
		'angularjs-datetime-picker',
		
		
	
		'ui.bootstrap'
	
	
		
		

	
	]);

currencyApp.config(function ($stateProvider,$urlRouterProvider,$httpProvider) {

	//handle 401 unauthorized
	//$httpProvider.interceptors.push('authHttpResponseInterceptor');

	$stateProvider
		// .state('home', {
		// 	url: '/home',
		// 	templateUrl: 'views/home.html',
		// 	controller: 'HomeCtrl' // login-controller
		// })
		// .state('login', {
		// 	url: '/login',
		// 	templateUrl: 'views/login.html',
		// 	controller: 'LoginCtrl' // login-controller
		// })
		// .state('farmer-management', {
		// 	url: '/farmer-management',
		// 	templateUrl: 'views/farm-management.html',
		// 	controller: 'listfarmerCtrl'
		// })
		// .state('user-management', {
		// 	url: '/user-management',
		// 	templateUrl: 'views/view-user.html'
		// })
		// .state('individual-pump', {
		// 	url: '/individual-pump/:id',
		// 	templateUrl: 'views/pump-individual-view.html',
		// 	controller: 'individualPumpSiteInfoCtrl'
		// })
		//  .state('add-farmer', {
		// 	url: '/add-farmer',
		// 	templateUrl: 'views/edit-farmer.html',
		// 	controller: 'addeditfarmerCtrl'
		// })
		// .state('view-farmer', {
		// 	url: '/view-farmer/:id',
		// 	templateUrl: 'views/view-farmer.html',
		// 	controller: 'viewfarmerCtrl'
		// })
		// .state('edit-farmer', {
		// 	url: '/edit-farmer/:id',
		// 	templateUrl: 'views/edit-farmer.html',
		// 	controller: 'addeditfarmerCtrl'
		// })
		// .state('view-pump', {
		// 	url: '/view-pump/:id',
		// 	templateUrl: 'views/view-pump.html',
		// 	controller: 'viewpumpCtrl'
		// })
		// .state('add-pumpdetail', {
		// 	url: '/add-pumpdetail',
		// 	templateUrl: 'views/edit-pump.html',
		// 	controller: 'addeditpumpCtrl'
		// })
		// .state('edit-pump', {
		// 	url: '/edit-pump/:id',
		// 	templateUrl: 'views/edit-pump.html',
		// 	controller: 'addeditpumpCtrl'
		// })
		// .state('activation', {
		// 	url: '/activation?code',
		// 	templateUrl: 'views/activation.html',
		// 	controller: 'activationCtrl' // login-controller
		// })
		// .state('forgot-password', {
		// 	url: '/forgot-password',
		// 	templateUrl: 'views/forgot-password.html',
		// 	controller: 'forgotpasswordCtrl' // login-controller
		// })
		// .state('company-management', {
		// 	url: '/company-management',
		// 	templateUrl: 'views/company-management.html',
		// 	controller: 'CompanyCtrl'
		// })
		// .state('add-company', {
		// 	url: '/add-company',
		// 	templateUrl: 'views/add-company.html',
		// 	controller: 'CompanyCtrl'
		// })
		// .state('admin-home', {
		// 	url: '/admin-home',
		// 	templateUrl: 'views/admin-home.html',
		// 	controller: 'AdminCtrl'
		// })
		// .state('view-company', {
		// 	url: '/view-company/:id',
		// 	templateUrl: 'views/view-company.html',
		// 	controller: 'ViewEditCompanyCtrl'
		// })
		// .state('edit-company', {
		// 	url: '/edit-company/:id',
		// 	templateUrl: 'views/edit-company.html',
		// 	controller: 'ViewEditCompanyCtrl'
		// })
		// .state('add-user', {
		// 	url: '/add-user',
		// 	params : {list_dealer:true},
		// 	templateUrl: 'views/add-user.html',
		// 	controller: 'UserCtrl'
		// })
		// .state('view-user', {
		// 	url: '/view-user/:id',
		// 	params : {view_user:true},
		// 	templateUrl: 'views/view-user.html',
		// 	controller: 'UserCtrl'
		// })
		// .state('edit-user', {
		// 	url: '/edit-user/:id',
		// 	params : {edit_user:true,list_dealer:true},
		// 	templateUrl: 'views/edit-user.html',
		// 	controller: 'UserCtrl'
		// })
		// .state('account-mgmt', {
		// 	url: '/account-mgmt/:id',
		// 	params : {list_user:true},
		// 	templateUrl: 'views/account-mgmt.html',
		// 	controller: 'UserCtrl'
		// })
		
		.state('login', {
			url: '/login',
			templateUrl: 'dashboard.html',
			controller: 'CurrencyCtrl'
		})
		// .state('login', {
		// 	url: '/login',
		// 	templateUrl: 'views/signup.html',
		// 	controller: 'CurrencyCtrl'
		// })
		
		
		
		
		

	//$urlRouterProvider.otherwise('/home');

});


	// 	currencyApp.run(['$rootScope','$state','$stateParams', '$location', '$cookieStore', '$http','$timeout','$document','AuthenticationServiceLogin','ENV', function ($rootScope,$state,$stateParams, $location, $cookieStore, $http,$timeout,$document,AuthenticationServiceLogin,ENV) {
	// 	    //window.location.hash = '#/';
	// 		$rootScope.globals = $cookieStore.get('globals') || {};
	// 		if ($rootScope.globals.currentUser) {
 //            $http.defaults.headers.common['X-Auth-Token'] = $rootScope.globals.currentUser.authdata;
 //            }
	// 		//redirect code for user
	// 		// $rootScope.$on('$locationChangeStart', function (event, next, current) {
	// 		// 	// redirect to login page if not logged in and trying to access a restricted page
	// 		// 	var restrictedPage = $.inArray($location.path(), ['/forgot-password','/activation','/home']) === -1;
	// 		// 	var loggedIn = $rootScope.globals.currentUser;
	// 		// 	 if (restrictedPage && !loggedIn) {
	// 		// 		var myEl = angular.element( document.querySelector( '#wrapper' ));
	// 		// 		myEl.attr('id',"home_wrapper");
	// 		// 	    $location.path('/login');
	// 		// 	} 

				
	// 		// //changes for not allowing login page
	// 		// if(loggedIn){
	// 		// 		var path = $location.path();
	// 		// 		if(path=='/login'){
	// 		// 		$location.path('user-home');
	// 		// 		}
	// 		// 	}
	// 		// });
	// }]);