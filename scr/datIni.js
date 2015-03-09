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
			get: get /*,
			getCnt: getCnt,
			getTpl: getTpl */
		};

		return service;

		////////////

		function get(root) {
			var dat = [];
			if (root === 'cont') dat = getCnt();
			if (root === 'tpls') dat = getTpl();
			if (root === 'pgs') dat = getPg();

			return dat;
		}


		function getPg() { 
			// Initialise the pages
			return [
				{
					pname: 'home',
					ptit: 'My tear it up home page',
					pdesc: 'This may not be shown on the page'
				},
				{
					pname: 'todo',
					ptit: 'Materialeysed todo list',
					pdesc: 'Ongoing stuff to do'
				},
				{
					pname:'about',
					ptit: 'About Materialyzed',
					pdesc: 'About the ethos and the people'
				}
			]
		};
		 

		function getCnt() { 
			// Initialise the content
			return [
				{
					label: "This is a content manager",
					tpl: "h3"
				},
				{
					label: "You can edit the content",
					tpl: "h3"
				},
				{
					label: "Next I have to work out how to change order",
					tpl :"h3"
				},
				{
					label: "Implement material design",
					tpl: "h2"
				},
				{
					label :"Home controller and Multiple pages",
					tpl: "h2"
				}
			]
		};


		function getTpl() { 
			// Return initial templates
			return [
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
		};

	}
})();

