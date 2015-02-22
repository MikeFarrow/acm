/*
mf:2014-11-26::defC.js
Default controller, gets content from a service and
extends the controller object.

*/
(function() {
	
	angular
		.module('app')
		.controller('defC', defC);

	defC.$inject = ['$scope','dataS'];

	function defC($scope, dataS) {

		/* jshint validthis: true */
		var vm = this;
		var dat = getCnt();
		var tpl = getTpl();
		//var vm.showPan;

		// *** Setup

		// Connect the handlers
		vm.edTpl = edTpl;
		vm.upTpl = upTpl;
		vm.edCnt = edCnt;
		vm.upCnt = upCnt;
		vm.deCnt = deCnt;
		vm.showPanel = showPanel;

		/////// Implementation ///////

		function showPanel(iPan){
			//console.log('showPanel: ' + iPan);
			vm.showPan = iPan;
		}

		// Update a content item
		function upTpl() {
			var newItem = {};
			// Edited an item
			if (vm.curItem !== 0) {
				vm.curItem.type = vm.type;
				vm.curItem.name = vm.name;
				vm.curItem.tpl = vm.tpl;
			} else { // Insert an added item
				newItem.type = vm.type;
				newItem.name = vm.name;
				newItem.tpl = vm.tpl;
				// Add the new
				vm.tpls.push(newItem);
			}
			// Save the changes
			dataS.savTpl(vm.tpls);
			clrTpl();
			showPanel(0);
		}

		// Prepare and show add / edit content
		function edTpl(item, ind) {
			// Display the edit screen and set model
			console.log('showPanel:');
			showPanel(4);
			// Is it an edit
			if(item !== 0) {
				// Set the fields for the form
				vm.type = item.type;
				vm.name = item.name;
				vm.tpl = item.tpl;
				// Save the item for updating
				vm.curItem = item;
				vm.curItem.ind = ind; // Catch the index
			} else { // Add item
				clrTpl()
			}
		}

		// Clear the content screen
		function clrTpl() {
			vm.type = '';
			vm.name = '';
			vm.tpl = '';
			vm.curItem = 0;
		}

		// Get the content from storage
		function getTpl() {
			var promise = dataS.getTpl();
			promise.then(
				function(result) {
					angular.extend(vm, result);
				})
		}

		// Get the content from storage
		function getCnt() {
			var promise = dataS.getCnt();
			promise.then(
				function(result) {
					angular.extend(vm, result);
				})
		}


		// Delete a content item
		function deCnt() {
			// Edited item
			if (vm.curItem !== 0) {
				// Delete the item from view
				vm.cont.splice(vm.curItem.ind);
			}
			// Save the changes
			dataS.savCnt(vm.cont);
			clrCnt();
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
				vm.cont.push(newItem);
			}
			// Save the changes
			dataS.savCnt(vm.cont);
			clrCnt();
			showPanel(0);
		}

		// Prepare and show add / edit content
		function edCnt(item, ind) {
			// Display the edit screen and set model
			//vm.showEdCnt = true;
			showPanel(3);
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