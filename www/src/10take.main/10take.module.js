(function() {

	function Run() {

	}
		Run.$inject = [];

	function Config(stateProvider, urlRouterProvider) {
		stateProvider
			.state('auth', {
				url: '/auth',
				views: {
					 'main': { 
					 	templateUrl: "src/10take.main/auth/auth.html" 
					 }
				}
			})

		// home page
		urlRouterProvider.otherwise('auth');
	}
		Config.$inject = ['$stateProvider', '$urlRouterProvider'];

	angular.module('10take', [
		'ng-token-auth',
		'ui.router',
		'10take.home'
		])
		.run(Run)
		.config(Config)

}())