(function() {
	'use strict';

	angular
		.module('app', ['LocalForageModule']);
})();

(function() {
	'use strict';

	angular
		.module('app')
		// This function returns the item in an array that matches a property
		.filter('getByProp', getByProp);

	function getByProp() {
		return function(propertyName, propertyValue, collection) {
			var i=0, len=collection.length;
			for (i; i<len; i++) {
				if (collection[i][propertyName] == propertyValue) {
					return collection[i];
				}
			}
			return null;
		}
	};
})();

/*
(function() {
	'use strict';

	angular
		.module('app')
		// This function returns the item in an array that matches a property
		.config('router', router);

	router.$inject = ['$routeProvider', '$locationProvider'];

	function router($routeProvider, $locationProvider) {
    $routeProvider
			.when('/',
				{
					controller: 'homeCont',
					templateUrl: 'template/home.html'
				})
			.when('/:cid',
				{
					controller: 'editCont',
					templateUrl: 'template/edit.html'
				})

			.otherwise({ redirectTo: '/' });

		// Remove # from url paths
		$locationProvider.html5Mode(false);
	};
})();
*/