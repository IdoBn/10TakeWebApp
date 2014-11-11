(function() {

	function SignUpCtrl(scope, auth, log, state) {
		scope.auth.singIn = false;

		this.handleSignUp = function(user) {
			log.debug(user);
			 auth.submitRegistration(user)
        .then(function(resp) { 
          // handle success response
          log.debug('resp handle sign up', resp);
          state.go('home');	
        })
        .catch(function(resp) { 
          // handle error response
          log.debug('resp handle sign up', resp);
        });
		}
	}
		SignUpCtrl.$inject = ['$scope', '$auth', '$log', '$state'];

	angular.module('10take.auth.signUp')
		.controller('SignUpCtrl', SignUpCtrl)

}())