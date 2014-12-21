/*
mf:2014-11-26::defC.js
Default controller, gets content from a service and
extends the controller object.

*/
(function() {
	
	angular
		.module('app')
		.controller('defC', defC);

	defC.$inject = ['$scope', '$filter','dataS'];

	function defC($scope, $filter, dataS) {

		/* jshint validthis: true */
		var vm = this;
		var dat = dataS.getCnt();
		var tpl = dataS.getTpl();

		angular.extend(vm, dat);
		angular.extend(vm, tpl);

		console.log(vm);

		// *** Setup
		//dataS.setUp();

		// Connect the handlers
		vm.edCnt = edCnt;
		vm.upCnt = upCnt;
		vm.deCnt = deCnt;

		/////// Implementation ///////

		// Delete a content item
		function deCnt() {
			// Edited item
			if (vm.curItem !== 0) {
				// Delete the item from view
				vm.cont.splice(vm.curItem.ind);
			}
			// Save the changes
			dataS.savCnt(dat);
			return;
		}

		// Update a content item
		function upCnt() {
			var newItem = {};
			// Edited item
			if (vm.curItem !== 0) {
				vm.curItem.label = vm.cnt;
				vm.curItem.tpl = vm.ctype;
			} else { // Insert and added item
				newItem.label = vm.cnt;
				newItem.tpl = vm.ctype;
				// Add the new
				dat.cont.push(newItem);
			}
			clrCnt();
			// Save the changes
			dataS.savCnt(dat);
			return;
		}

		// Prepare and show add / edit content
		function edCnt(item, ind) {
			// Display the edit screen and set model
			vm.showEdCnt = true;
			// Is it an edit
			if(item !== 0) {
				// Set the fields for the form
				vm.ctype = item.tpl;
				vm.cnt = item.label;
				// Save the item for updating
				vm.curItem = item;
				vm.curItem.ind = ind; // Catch the index
			} else { // Add item
				clrCnt()
			}
		}

		// Clear the content screen
		function clrCnt() {
			vm.tpl = '';
			vm.cnt = '';
			vm.ctype = '';
			vm.curItem = 0;
		}

	}

})();