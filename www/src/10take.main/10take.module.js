(function() {

	function Run() {

	}
		Run.$inject = [];

	function Config(stateProvider, urlRouterProvider) {

		// home page
		urlRouterProvider.otherwise('/auth/signIn');
	}
		Config.$inject = ['$stateProvider', '$urlRouterProvider'];

	angular.module('10take', [
		'ngAnimate',
		'ui.bootstrap',
		'ng-token-auth',
		'ui.router',
		'10take.app',
		'10take.home',
		'10take.auth',
		'10take.user',
		'10take.services'
		])
		.run(Run)
		.config(Config)

}())