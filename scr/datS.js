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
			setUp: setUp,
			getTpl: getTpl
		};

		return service;

		////////////

		function setUp() { 

			var cnt = getCnt();
			dLocS.savCnt(cnt);

		};

		function getCnt() { 
console.log('In getCnt')
			return dLocS.getCnt();
			return {
				cont:
				[
					{
						label: 'item one label',
						tpl: 'h2'
					},
					{
						label:'item two label',
						tpl: 'h3'
					}
				]
			}
		};

		function getTpl() { 
			return {
				cont:
				[
					{
						type: 'h1',
						tpl: '<h1>{{item.label}}</h1>'
					},
					{
						type: 'h2',
						tpl: '<h2>{{item.label}}</h2>'
					},
					{
						type:'h3',
						tpl: '<h3>{{item.label}}</h3>'
					}
				]
			}
		};

	}
})();