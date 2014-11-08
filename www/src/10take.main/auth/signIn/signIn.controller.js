(function() {

	function SignInCtrl(scope) {
		scope.auth.signIn = true;
	}

		SignInCtrl.$inject = ['$scope'];

	angular.module('10take.auth')
		.controller('SignInCtrl', SignInCtrl)

}())