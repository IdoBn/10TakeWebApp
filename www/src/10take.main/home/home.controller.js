(function() {

	function HomeCtrl(log, stateParams, auth) {
		log.debug(stateParams);
		log.debug(auth)
		this.name = stateParams.name;
	}
		HomeCtrl.$inject = ['$log', '$stateParams', '$auth'];

	angular.module('10take.home')
		.controller('HomeCtrl', HomeCtrl)
}());