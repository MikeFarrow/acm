/*
mf:2014-11-26::dataS.js

This class is exposed to controllers, directives and other services,
it talks to the $localForage data provider library but may swapped for one 
that provides a similar service

*/
(function() {
	'use strict';

	angular
		.module('app')
		.factory('dataS', dataS);

	dataS.$inject = ['datIni', '$localForage', '$q'];

	function dataS(datIni, $localForage, $q) {

		var dat = {};

		var service = {
			getCnt: getCnt,
			savCnt: savCnt,

			getTpl: getTpl,
			savTpl: savTpl
		};

		return service;

		////////////

		// Get the content
		function getTpl() {
			var dat = {}
			var deferred = $q.defer();

			// Look up the data
			$localForage.getItem('myTmpl').then(function(data) {
				// If data found
				if (typeof(data) !== 'undefined') {
					// Return the data
					dat.tpls = data;
				} else {
					// Initialise the content
					dat.tpls = iniTpl();
				}
				//console.log(deferred);
				deferred.resolve(dat);
			});
			return deferred.promise;
		};

		function iniTpl() {

			// Get the hardcoded initial data
			var tpl = datIni.getTpl();
			// Save it to local storage
			savTpl(tpl);

			return tpl;

		};


		function savTpl(dat) { 
			$localForage.setItem('myTmpl', dat).then(function() {
				//console.log('Saved Tpls:');
			});
		};

		// Get the content
		function getCnt() {
			var dat = {}
			var deferred = $q.defer();

			// Look up the data
			$localForage.getItem('myCont').then(function(data) {
				// If data found
				if (typeof(data) !== 'undefined') {
					// Return the data
					dat.cont = data;
				} else {
					// Initialise the content
					dat.cont = iniCnt();
				}
				//console.log(deferred);
				deferred.resolve(dat);
			});
			return deferred.promise;
		};

		function iniCnt(dat) {

			// Get the hardcoded initial data
			var cnt = datIni.getCnt();
			// Save it to local storage
			savCnt(cnt);

			return cnt;

		};

		function savCnt(dat) { 
			$localForage.setItem('myCont', dat).then(function() {
				//console.log('Saved:');
			});
		};

	}
})();

