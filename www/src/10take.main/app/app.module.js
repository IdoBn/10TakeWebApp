(function() {

	function Run(rootScope, state, log) {
		rootScope.$on('$stateChangeError', function() {
			log.debug('route unauthorized');
			state.go('auth.signIn');
		});
	}
		Run.$inject = ['$rootScope', '$state', '$log'];


	function Config(stateProvider, urlRouterProvider) {

		stateProvider
			.state('app', {
				abstract: true,
				url: '/app',
				templateUrl: "src/10take.main/app/app.html",
				controller: 'AppCtrl as app',
				resolve: {
          auth: function($auth) {
            return $auth.validateUser();
          }
      	}
			})

	}
		Config.$inject = ['$stateProvider', '$urlRouterProvider']

	angular.module('10take.app', [])
		.config(Config)
		.run(Run)

}());