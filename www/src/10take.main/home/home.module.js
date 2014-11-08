(function() {

	function Run() {

	}

	function Config(stateProvider, urlRouterProvider) {
		stateProvider
			.state('home', {
					url: '/home',
					views: {
						'main': {
							templateUrl: 'src/10take.main/home/home.html',
							controller: 'HomeCtrl as home'
						}
					},
					resolve: {
	          auth: function($auth) {
	            return $auth.validateUser();
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