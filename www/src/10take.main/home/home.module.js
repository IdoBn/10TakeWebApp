(function() {

	function Run() {

	}

	function Config(stateProvider, urlRouterProvider) {
		stateProvider
			.state('home', {
					url: '/home/',
					params: {name: {}, hoohoo: {}},
					views: {
						'main': {
							templateUrl: 'src/10take.main/home/home.html',
							controller: 'HomeCtrl as home'
						}
					}
				});

		// home page
		urlRouterProvider.otherwise('home');
	}
		Config.$inject = ['$stateProvider', '$urlRouterProvider'];

	angular.module('10take.home', [])
		.run(Run)
		.config(Config)

}());