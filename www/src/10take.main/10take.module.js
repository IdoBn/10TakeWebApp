(function() {

	function Run() {

	}
		Run.$inject = [];

	function Config(stateProvider, urlRouterProvider) {
		// home page
		urlRouterProvider.otherwise('auth');
	}
		Config.$inject = ['$stateProvider', '$urlRouterProvider'];

	angular.module('10take', [
		'ng-token-auth',
		'ui.router',
		'10take.home',
		'10take.auth'
		])
		.run(Run)
		.config(Config)

}())