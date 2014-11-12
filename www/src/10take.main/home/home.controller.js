(function() {

	function HomeCtrl(log, stateParams, auth, items) {
		// log.debug('state params', stateParams);
		// log.debug('auth', auth);
		//this.name = stateParams.name;
		this.items = items.all;
		this.user = auth.user.name;
		this.user = "Guy Moses";

		log.debug('home ctrl auth', auth);
		log.debug('home ctrl auth.user', auth.user);
	}
		HomeCtrl.$inject = ['$log', '$stateParams', '$auth','ItemsService'];

	angular.module('10take.home')
		.controller('HomeCtrl', HomeCtrl)
}());