(function() {

	function Run() {

	}

	function Config(stateProvider, urlRouterProvider) {
		stateProvider
			.state('auth', {
					url: '/auth',
					params: {name: {}, hoohoo: {}},
					views: {
						'main': {
							templateUrl: 'src/10take.main/auth/auth.html',
							controller: 'AuthCtrl as auth'
						}
					}
				});

		// home page
		urlRouterProvider.otherwise('auth');
	}
		Config.$inject = ['$stateProvider', '$urlRouterProvider'];

	angular.module('10take.auth', [])
		.run(Run)
		.config(Config)

}());