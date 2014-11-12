(function() {

	function Run() {

	}

	function Config(stateProvider, urlRouterProvider, authProvider) {
		stateProvider
			.state('auth', {
				abstract: true,
				url: '/auth',
				templateUrl: 'src/10take.main/auth/auth.html',
				controller: 'AuthCtrl as auth'
			});

		// home page
		urlRouterProvider.otherwise('/auth/signIn');

		authProvider.configure({
			apiUrl:  'http://localhost:3000',
			storage: 'cookies',
			confirmationSuccessUrl: window.location.origin + '/www/index.html#/home'
		});
	}
		Config.$inject = ['$stateProvider', '$urlRouterProvider', '$authProvider'];

	angular.module('10take.auth', [
		'10take.auth.signUp',
		'10take.auth.signIn'
		])
		.run(Run)
		.config(Config)

}());