/*
mf:2015-01-06::datIni.js

This factory justs provides some initialisation data for content and templates.

It is for new instances of the content manager and creating new sites.

*/
(function() {
	'use strict';

	angular
		.module('app')
		.factory('datIni', datIni);

	function datIni() {

		var service = {
			getCnt: getCnt,
			getTpl: getTpl
		};

		return service;

		////////////


		function getCnt() { 
			//console.log('In getCnt')
			return {
				"cont":[
				{
					"label":"This is a content manager",
					"tpl":"h3"
				},
				{
					"label":"You can edit the content",
					"tpl":"h3"
				},
				{
					"label":"Next I have to work out how to change order",
					"tpl":"h3"
				},
				{
					"label":"and maybe paginate",
					"tpl":"h2"
				},{
					"label":"New item",
					"tpl":"h2"
				}]
			}

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

