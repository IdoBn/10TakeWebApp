(function() {

	function HomeCtrl(log, stateParams, auth) {
		// log.debug('state params', stateParams);
		// log.debug('auth', auth);
		this.name = stateParams.name;

		log.debug('home ctrl auth', auth);
		log.debug('home ctrl auth.user', auth.user);
	}
		HomeCtrl.$inject = ['$log', '$stateParams', '$auth'];

	angular.module('10take.home')
		.controller('HomeCtrl', HomeCtrl)
}());