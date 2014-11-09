(function() {

	function Run() {

	}

	function Config(stateProvider, urlRouterProvider) {
		stateProvider
			.state('auth.signIn', {
					url: '/signIn',
					views: {
						'sign': {
							templateUrl: 'src/10take.main/auth/signIn/signIn.html',
							controller: 'SignInCtrl as signIn'
						}
					}
				});

		urlRouterProvider.otherwise('auth/signIn');
	}
		Config.$inject = ['$stateProvider', '$urlRouterProvider'];

	angular.module('10take.auth.signIn', [])
		.run(Run)
		.config(Config);

}())