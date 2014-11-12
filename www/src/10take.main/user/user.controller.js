(function() {

	function UserCtrl(log, stateParams, auth, stateParams, users) {
		this.id = stateParams.userId;
		this.all = users.all;
		this.user = auth.user.name;
		this.user = "Guy Moses";
		
		var doc = users.all;

		log.debug(stateParams.userId);
		var result = getById(doc, 2);

		this.oneUser = result;

		function getById(arr, id) {
		    for (var d = 0, len = arr.length; d < len; d += 1) {
		        if (arr[d].id === id) {
		            return arr[d];
		        }
		    }
		}
	}

		UserCtrl.$inject = ['$log', '$stateParams', '$auth','$stateParams','UsersService'];

	angular.module('10take.user')
		.controller('UserCtrl', UserCtrl)
}());