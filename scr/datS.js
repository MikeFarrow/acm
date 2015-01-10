/*
mf:2014-11-26::dataS.js

This class is exposed to controllers, directives and other services,
it does not talk directly to data providers but used a set of 
injected classes as appropiate

*/
(function() {
	'use strict';

	angular
		.module('app')
		.factory('dataS', dataS);

	dataS.$inject = ['dLocS', 'datIni', '$localForage'];

	function dataS(dLocS, datIni, $localForage) {

		var dat = {};

		var service = {
			getCnt: getCnt,
			savCnt: savCnt,
			getTpl: getTpl
		};

		return service;

		////////////

		// Get the content
		function getCnt() {
			var cnt;
			// Look up the data
			$localForage.getItem('myCont').then(function(data) {
				// If data found
				if (typeof(data) !== 'undefined') {
					// Return the data
					cnt = data;
			console.log('In getCnt');
			console.log(cnt);
				} else {
					// Initialise the content
					cnt = iniCnt();
				}
				return cnt;
			});
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
				console.log('Saved:');
			});
		};

		function getCntOld() { 
			//console.log('In getCnt')
			return dLocS.getCnt();

		};

		function getTpl() { 
			return {
				tpls:
				[
					{
						type: 'h1',
						name: 'Header 1',
						tpl: '<h1>{{item.label}}</h1>'
					},
					{
						type: 'h2',
						name: 'Header 2',
						tpl: '<h2>{{item.label}}</h2>'
					},
					{
						type:'h3',
						name: 'Header 3',
						tpl: '<h3>{{item.label}}</h3>'
					}
				]
			}
		};

	}
})();

