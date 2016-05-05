webApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/about', {
			templateUrl: 'views/about.html',
			controller: 'AboutController'
		}).
		otherwise({
			templateUrl: 'views/homepage.html',
			controller: 'HomepageController'
		});
}]);