(function() {

	function SignUpCtrl(scope) {
		scope.auth.singIn = false;
	}
		SignUpCtrl.$inject = ['$scope'];

	angular.module('10take.auth')
		.controller('SignUpCtrl', SignUpCtrl)

}())