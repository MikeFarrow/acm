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

	dataS.$inject = ['dLocS'];

	function dataS(dLocS) {

		var dat = {};

		var service = {
			getCnt: getCnt,
			savCnt: savCnt,
			setUp: setUp,
			getTpl: getTpl
		};

		return service;

		////////////

		// For persisting initial data
		function setUp() { 

			var cnt = getCnt();
			dLocS.savCnt(cnt);

		};

		function savCnt(dat) { 
			//console.log('In getCnt')
			return dLocS.savCnt(dat);

		};

		function getCnt() { 
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