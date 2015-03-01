/*
mf:2015-02-26::daDic.js

This class is exposed to controllers, it handles form functions such as 
clearing them, populating them with data and reading the data based on
data dictionary type definitions

*/
(function() {
	'use strict';

	angular
		.module('app')
		.factory('daDic', daDic);

	daDic.$inject = [];

	function daDic() {

		var dic = {
			tpls: ['type', 'name', 'tpl'],
			cont: ['tpl', 'label']
		};

		var service = {
			fClr: fClr,
			fSet: fSet,
			fUpd: fUpd
		};

		return service;

		////////////

		// Set a form
		function fUpd(frm, vm) {

			var newItem = {}; // Used for added items
			// Loop through the fields to set
			var i=0, len=dic[frm].length;
			for (i; i<len; i++) {

				// Update edited item's field
				if (vm.curItem !== 0) {
					vm.curItem[dic[frm][i]] = vm[dic[frm][i]];
				} else { 
					// Update an added item's field
					newItem[dic[frm][i]] = vm[dic[frm][i]];
				}
			}
			// If a new item push it to the data array
			if (vm.curItem === 0) vm[frm].push(newItem);
		};

		// Set a form
		function fSet(frm, vm, item) {

			// Loop through the fields to set
			var i=0, len=dic[frm].length;
			for (i; i<len; i++) {
				// Set the fields
				vm[dic[frm][i]] = item[dic[frm][i]];
			}
		};

		// Clear a form
		function fClr(frm, vm) {

			// Loop through the fields to clear
			var i=0, len=dic[frm].length;
			for (i; i<len; i++) {
				// Clear the fields
				vm[dic[frm][i]] = '';
			}
		};


		// Record initialisation
		function fIni(store, root) {

		};



	}
})();

