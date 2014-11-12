(function() {

	// function Run(rootScope, state, log) {
	// 	rootScope.$on('$stateChangeError', function() {
	// 		log.debug('route unauthorized');
	// 		state.go('auth.signIn');
	// 	});
	// }
	// 	Run.$inject = ['$rootScope', '$state', '$log'];

	function Config(stateProvider, urlRouterProvider) {
		stateProvider
			.state('app.home', {
					url: '/home',
					views: {
						'main': {
							templateUrl: 'src/10take.main/home/home.html',
							controller: 'HomeCtrl as home'
						}
					}
				});

		// home page
		urlRouterProvider.otherwise('/app/home/');
	}
		Config.$inject = ['$stateProvider', '$urlRouterProvider'];

	angular.module('10take.home', [])
		// .run(Run)
		.config(Config)

}());