'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'feventii.app.web.login',
  'feventii.app.web.account' 	
]).
config(['$routeProvider', function($routeProvider) {
$routeProvider.
      when('/login', {
        templateUrl: 'modules/login/views/login.html',
        controller: 'LoginController as vm'
      }).
      when('/home', {
        templateUrl: 'modules/home/views/home.html',
        controller: 'HomeController'
      }).
      when('/account', {
        templateUrl: 'modules/account/views/account.html',
        controller: 'AccountController'
      }).
      when('/error', {
            templateUrl: 'error.html'		                          
      }).
      otherwise({
        redirectTo: '/index'
      });	
	
  //$routeProvider.otherwise({redirectTo: '/view1'});
}]);
