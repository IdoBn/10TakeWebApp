(function() {

	function AuthCtrl() {
		this.name = 'auth';
	}

		AuthCtrl.$inject = [];

	angular.module('10take.auth')
		.controller('AuthCtrl', AuthCtrl)

}());