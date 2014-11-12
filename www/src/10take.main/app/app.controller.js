(function() {

	function AppCtrl(auth, log) {
		log.debug('app ctrl', auth.user);
		this.user = auth.user;
	}
		AppCtrl.$inject = ['$auth', '$log'];

	angular.module('10take.app')
		.controller('AppCtrl', AppCtrl);

}())