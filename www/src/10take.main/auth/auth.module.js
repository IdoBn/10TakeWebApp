(function() {

	function Run() {

	}

	function Config(stateProvider, urlRouterProvider, authProvider) {
		stateProvider
			.state('auth', {
					'abstract': true,
					url: '/auth',
					views: {
						'main': {
							templateUrl: 'src/10take.main/auth/auth.html',
							controller: 'AuthCtrl as auth'
						}
					}
				})
			.state('auth.signIn', {
				url: '/signIn',
				views: {
					'sign': {
						templateUrl: 'src/10take.main/auth/signIn/signIn.html',
						controller: 'SignInCtrl as signIn'
					}
				}
			})
			.state('auth.signUp', {
				url: '/signUp',
				views: {
					'sign': {
						templateUrl: 'src/10take.main/auth/signUp/signUp.html',
						controller: 'SignUpCtrl as signUp'
					}
				}
			});

		// home page
		urlRouterProvider.otherwise('auth/signIn');


		authProvider.configure({
			apiUrl:  'http://localhost:3000',
			storage: 'cookies',
			confirmationSuccessUrl: window.location.origin + '/www/index.html#/home'
		});
	}
		Config.$inject = ['$stateProvider', '$urlRouterProvider', '$authProvider'];

	angular.module('10take.auth', [])
		.run(Run)
		.config(Config)

}());