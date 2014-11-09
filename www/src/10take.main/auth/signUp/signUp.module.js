(function() {

	function Run() {

	}

	function Config(stateProvider, urlRouterProvider) {
		stateProvider
			.state('auth.signUp', {
				url: '/signUp',
				views: {
					'sign': {
						templateUrl: 'src/10take.main/auth/signUp/signUp.html',
						controller: 'SignUpCtrl as signUp'
					}
				}
			});

		urlRouterProvider.otherwise('auth');
	}	
		Config.$inject = ['$stateProvider', '$urlRouterProvider'];

	angular.module('10take.auth.signUp', [])
		.run(Run)
		.config(Config);

}());