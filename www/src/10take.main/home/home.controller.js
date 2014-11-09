(function() {

	function HomeCtrl(log, stateParams, auth) {
		// log.debug('state params', stateParams);
		// log.debug('auth', auth);
		this.name = stateParams.name;
	}
		HomeCtrl.$inject = ['$log', '$stateParams', '$auth'];

	angular.module('10take.home')
		.controller('HomeCtrl', HomeCtrl)
}());