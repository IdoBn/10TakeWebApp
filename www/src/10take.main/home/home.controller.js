(function() {

	function HomeCtrl(log, stateParams) {
		log.debug(stateParams);
		this.name = stateParams.name;
	}
		HomeCtrl.$inject = ['$log', '$stateParams'];

	angular.module('10take.home')
		.controller('HomeCtrl', HomeCtrl)
}());