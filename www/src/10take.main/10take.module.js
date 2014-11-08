(function() {

	function Run() {

	}
		Run.$inject = [];

	function Config() {

	}
		Config.$inject = [];

	angular.module('10take', [
		'ng-token-auth'
		])
		.run(Run)
		.config(Config)

}())