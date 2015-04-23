(function(){
	var app = angular.module('feventii.app.web.login',[]);
	app.controller('LoginController', LoginController);
	function LoginController($location){
		var vm = this;
		vm.login = function (user){
			if( user === undefined){
				vm.msg = 'Username and password required';
			}
			else
			if (user.username === 'user' && user.password === 'password'){
				vm.msg = '';				
				console.log('authenicated');
				$location.url('account');
			}

		}
	}
}());
