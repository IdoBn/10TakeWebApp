(function(){

	function Run(rootScope, state, log) {
		rootScope.$on('$stateChangeError', function() {
			log.debug('route unauthorized');
			state.go('auth.signIn');
		});
	}
		Run.$inject = ['$rootScope', '$state', '$log'];

	function Config(stateProvider, urlRouterProvider) {
		stateProvider
			.state('user', {
					url: '/user/:userId', // stateParams.userId
					views: {
						'main': {
							templateUrl: 'src/10take.main/user/user.html',
							controller: 'UserCtrl as user'
						}
					},
					resolve: {
	          auth: function($auth) {
	            return $auth.validateUser();
	          }
        	}
				});

		// home page
		urlRouterProvider.otherwise('user');
	}
		Config.$inject = ['$stateProvider', '$urlRouterProvider'];


	angular.module('10take.user', [])
		.run(Run)
		.config(Config)
}());