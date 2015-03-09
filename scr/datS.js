/*
mf:2014-11-26::dataS.js

This class is exposed to controllers, directives and other services,
it talks to the $localForage data provider library but may swapped for one 
that provides a similar service

*** Implement cacheing here

*/
(function() {
	'use strict';

	angular
		.module('app')
		.factory('dataS', dataS);

	dataS.$inject = ['datIni', '$localForage', '$q'];

	function dataS(datIni, $localForage, $q) {

		var dat = {};
		var stores = {
			cont : 'myCont',
			tpls : 'myTmpl',
			pgs : 'myPgs' 
		}

		var service = {
			rget: rget,
			rsav: rsav
		};

		return service;

		////////////

		// Get the records from a data store
		function rget(root) {
			var dat = {};
			var store = stores[root];
			var deferred = $q.defer();

			// Look up the data
			$localForage.getItem(store).then(function(data) {
				// If data found
				if (typeof(data) !== 'undefined') {
					// Return the data
					dat[root] = data;
				} else {
					// Initialise the content xxxx
					dat[root] = rini(root);
				}
				//console.log(deferred);
				deferred.resolve(dat);
			});
			return deferred.promise;
		};


		// Record initialisation
		function rini(root) {
			// Get the hardcoded initial data
			var dat = datIni.get(root);
			// Save it to local storage
			rsav(dat, root);

			return dat;
		};


		// Save the records to a store
		function rsav(dat, root) { 
			var store = stores[root];
			$localForage.setItem(store, dat).then(function() {
				//console.log('Record saved to: ' + store);
				//console.log(dat);
			});
		};

	}
})();

