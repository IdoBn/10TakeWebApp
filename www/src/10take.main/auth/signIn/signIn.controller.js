(function() {

	function SignInCtrl(scope, auth, log, state) {
		scope.auth.signIn = true;

		this.handleSignIn = function(user) {
			log.debug(user);
			auth.submitLogin(user)
				.then(function(resp) {
					log.debug(resp);
					state.go('home');
				})
				.catch(function(resp) {
					log.debug(resp)
				})
		};
	}

		SignInCtrl.$inject = ['$scope', '$auth', '$log', '$state'];

	angular.module('10take.auth')
		.controller('SignInCtrl', SignInCtrl)

}())