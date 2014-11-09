(function() {

	function SignInCtrl(scope, auth, log, state) {
		scope.auth.signIn = true;

		this.handleSignIn = function(user) {
			log.debug('user handle sign in', user);
			auth.submitLogin(user)
				.then(function(resp) {
					log.debug('resp handle sign in then', resp);
					state.go('home');
				})
				.catch(function(resp) {
					log.debug('resp handle sign in catch', resp)
				})
		};
	}

		SignInCtrl.$inject = ['$scope', '$auth', '$log', '$state'];

	angular.module('10take.auth.signIn')
		.controller('SignInCtrl', SignInCtrl)

}())