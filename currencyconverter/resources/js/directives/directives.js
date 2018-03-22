// 'use strict';
// /* Directives */

// // Menu Active
// gcApp.directive('autoActive', ['$location', function ($location) {
//         return {
//             restrict: 'A',
//             scope: false,
//             link: function (scope, element) {
//                 function setActive() {
//                     var path = $location.path();
//                     if (path) {
//                         angular.forEach(element.find('li'), function (li) {
//                             var anchor = li.querySelector('a');
//                             if (anchor.href.match('#' + path + '(/=\\/|$)')) {
//                                 angular.element(li).addClass('active');
//                             } else {
//                                 angular.element(li).removeClass('active');
//                             }
//                         });
//                     }
//                 }

//                 setActive();

//                 scope.$on('$locationChangeSuccess', setActive);
//             }
//         }
//     }]);

// // Number Validation
// gcApp.directive('numbersOnly', function () {
//     return {
//         require: 'ngModel',
//         link: function (scope, element, attr, ngModelCtrl) {
//             function fromUser(text) {
//                 if (text) {
//                     var transformedInput = text.replace(/[^0-9]/g, '');

//                     if (transformedInput !== text) {
//                         ngModelCtrl.$setViewValue(transformedInput);
//                         ngModelCtrl.$render();
//                     }
//                     return transformedInput;
//                 }
//                 return undefined;
//             }
//             ngModelCtrl.$parsers.push(fromUser);
//         }
//     }
// })

// // Decimal Number Validation
// gcApp.directive('decimalNumbers', function () {
//     return {
//         require: 'ngModel',
//         link: function (scope, element, attr, ngModelCtrl) {
//             function fromUser(text) {
//                 if (text) {
//                     var transformedInput = text.replace(/[^0-9\.]/g, '');

//                     if (transformedInput !== text) {
//                         ngModelCtrl.$setViewValue(transformedInput);
//                         ngModelCtrl.$render();
//                     }
//                     return transformedInput;
//                 }
//                 return undefined;
//             }
//             ngModelCtrl.$parsers.push(fromUser);
//         }
//     }
// })

// // Compare Password and Confirm Password
// 	gcApp.directive('pwCheck', [function () {
// 	    return {
// 	        require: 'ngModel',
// 	        link: function (scope, elem, attrs, ctrl) {
// 	            var firstPassword = '#' + attrs.pwCheck;
// 	            elem.add(firstPassword).on('keyup', function () {
// 	                scope.$apply(function () {
// 	                    // console.info(elem.val() === $(firstPassword).val());
// 	                    ctrl.$setValidity('pwmatch', elem.val() === $(firstPassword).val());
// 	                });
// 	            });
// 	        }
// 	    }
// 	}]);
// // Pump Serail No Validation
// gcApp.directive('pmpserialAvailable', function(ENV,$timeout,$q,$http) {
// 		return {
// 		restrict: 'A',
// 		require: 'ngModel',
// 		link: function(scope,elm,attr,ngModel) {
// 			elm.bind('blur', function (e) {
// 			 if (!ngModel || !elm.val()) return;
// 				$http.get(ENV.apiEndpoint+'GCSystem/Pump/pumpsys/validPumpSerialNumber/'+scope.dealer_id+'/'+elm.val()+'/'+scope.editpump.pumpModelName).then(function(res){
//             var reslt = '';
//             $timeout(function(){
// 						if(res.data.pumpSerialNumber == 'available') {
// 						  reslt = true;
// 						scope.editpump.pumpType = res.data.pumpType;
// 						} else {
// 						  reslt = false;
// 						scope.editpump.pumpType = '';
// 						}
// 						ngModel.$setValidity('pumpSerial',reslt);
// 						}, 1000);
// 				})
// 			  })
// 		}
// 		}
// })
// // Controller Serail No Validation
// gcApp.directive('ctrserialAvailable', function(ENV,$timeout,$q,$http) {
// 		return {
// 		restrict: 'A',
// 		require: 'ngModel',
// 		link: function(scope, elm, attr, ngModel) {
// 		 elm.bind('blur', function (e) {
// 		 if (!ngModel || !elm.val()) return;
// 		 $http.get(ENV.apiEndpoint+'GCSystem/Pump/pumpsys/validCtrSerialNo/'+scope.dealer_id+'/'+elm.val()+'/'+scope.editpump.ctrModelName).then(function(res){
//           var reslt = '';
//           $timeout(function(){
// 					if(res.data.ctrPumpSerialNo == 'available') {
// 					reslt = true;
// 					scope.editpump.controllerType = res.data.pumpControllerType;
// 					} else {
// 					reslt = false;
// 					scope.editpump.controllerType = '';
// 					}
// 					ngModel.$setValidity('ctrlSerial',reslt);
// 			}, 1000);
// 			})
// 		  })
// 		}
// 	  }
// })
// // Loginid  Availabel Validation
// gcApp.directive('loginidAvailable', function(ENV,$timeout,$q,$http) {
// 		return {
// 		restrict: 'A',
// 		require: 'ngModel',
// 		link: function(scope, elm, attr, ngModel) {
// 		 elm.bind('blur', function (e) {
// 		 if (!ngModel || !elm.val()) return;
// 		 $http.get(ENV.apiEndpoint+'/Authentication/validateLoginId/'+elm.val()).then(function(res){
//           var reslt = '';
//           $timeout(function(){
// 					if(res.data.login == 'valid') {
// 					reslt = true;
// 					} else {
// 					reslt = false;
// 					}
// 					ngModel.$setValidity('loginid',reslt);
// 			}, 1000);
// 			})
// 		  })
// 		}
// 	  }
// })
// // Email Availabel Validation
// gcApp.directive('emailAvailable', function(ENV,$timeout,$q,$http) {
// 		return {
// 		restrict: 'A',
// 		require: 'ngModel',
// 		link: function(scope, elm, attr, ngModel) {
// 		 elm.bind('blur', function (e) {
// 		 if (!ngModel || !elm.val()) return;
// 		 var data = {};
// 		 data.emailAddress = elm.val();
// 		 $http.post(ENV.apiEndpoint+'Authentication/validateEmailAddress/',data).then(function(res){
//         var reslt = '';
//         $timeout(function(){
// 				if(res.data.result == 'invalid_email_address' && attr.id != elm.val()) {
// 				   reslt = false;
// 				} else {
// 				   reslt = true;
// 				}
// 				ngModel.$setValidity('valid_email',reslt);
// 			}, 1000);
// 			})
// 		  })
// 		}
// 	  }
// })
// // Phone Availabel Validation
// gcApp.directive('phoneAvailable', function(ENV,$timeout,$q,$http) {
// 		return {
// 		restrict: 'A',
// 		require: 'ngModel',
// 		link: function(scope, elm, attr, ngModel) {
// 		 elm.bind('blur', function (e) {
// 		 if (!ngModel || !elm.val()) return;
// 		 var data = {};
// 		 data.mobileNumber = elm.val();
// 		 $http.post(ENV.apiEndpoint+'Authentication/validateMobileNumber/',data).then(function(res){
//         var reslt = '';
//         $timeout(function(){
// 				if(res.data.result == 'invalid_mobile_number' && attr.id != elm.val()) {
// 				 reslt = false;
// 				} else {
// 				 reslt = true;
// 				}
// 				ngModel.$setValidity('valid_phone',reslt);
// 			}, 1000);
// 			})
// 		  })
// 		}
// 	  }
// })
// // Go Back
// gcApp.directive("backButton", ["$window", function ($window) {
//     return {
//         restrict: "A",
//         link: function (scope, elem, attrs) {
//             elem.bind("click", function () {
//                 $window.history.back();
//             });
//         }
//     };
// }]);
// // File upload directives
// gcApp.directive('fileModel', ['$parse', function ($parse) {
//     return {
//         restrict: 'A',
//         link: function(scope, element, attrs) {
//             var model = $parse(attrs.fileModel);
// 			var isMultiple = attrs.multiple;
//             var modelSetter = model.assign;
//             element.bind('change', function(){
// 				var values = [];
//                 angular.forEach(element[0].files, function (item) {
//                     var value = {
//                         name: item.name,
//                         size: item.size,
//                         _file: item
//                     };
//                     values.push(value);
//                 });
//                 scope.$apply(function(){
//                      if (isMultiple) {
//                         modelSetter(scope, values);
//                         //scope.show_file = true;
//                     } else {
//                         modelSetter(scope, values[0]);
//                         //scope.show_file = true;
//                     }
//                 });
//             });
//         }
//     };
// }]);
