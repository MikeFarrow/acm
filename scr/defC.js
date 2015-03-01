/*
mf:2014-11-26::defC.js
Default controller, gets content from a service and
extends the controller object.

*/
(function() {
	
	angular
		.module('app')
		.controller('defC', defC);

	defC.$inject = ['$scope', 'dataS', 'daDic'];

	function defC($scope, dataS, daDic) {

		/* jshint validthis: true */
		var vm = this;
		var dat = getDat('cont');
		var tpl = getDat('tpls');
		//var vm.showPan;

		// *** Setup

		// Connect the handlers
		vm.edFrm = edFrm;
		vm.upFrm = upFrm;
		vm.deCnt = deCnt;
		vm.showPanel = showPanel;

		/////// Implementation ///////

		// Get the content from storage
		function getDat(dType) {
			var promise = dataS.rget(dType);
			promise.then(
				function(result) {
					//console.log('Ext: ' + dType);
					angular.extend(vm, result);
				})
		}


		function showPanel(iPan){
			//console.log('showPanel: ' + iPan);
			vm.showPan = iPan;
		}


		// Update the form data
		function upFrm(fdat) {

			// Save the form fields based on data dic
			daDic.fUpd(fdat, vm);

			// Save the changes
			dataS.rsav(vm[fdat], fdat);

			// Clear the form
			cFrm(fdat);
			showPanel(0);
		}


		// Prepare and show add / edit a form
		function edFrm(item, ind, dfrm, fdat) {
			// Display the edit screen and set model
			showPanel(dfrm);
			// Is it an edit
			if(item !== 0) {
				// Set the form fields based on data dictionary
				daDic.fSet(fdat, vm, item);
				// Save the item for updating
				vm.curItem = item;
				vm.curItem.ind = ind; // Catch the index
			} else { // Add item
				// Clear the form
				cFrm(fdat);
			}
		}


		// Clear a form
		function cFrm(frm) {
			// Clear form based on data dictionary
			daDic.fClr(frm, vm);
			// Reset the current item
			vm.curItem = 0;
		}


		// Delete a content item
		function deCnt() {
			// Edited item
			if (vm.curItem !== 0) {
				// Delete the item from view
				vm.cont.splice(vm.curItem.ind);
			}
			// Save the changes
			dataS.rsav(vm.cont, 'cont');
			// Clear the content form
			cFrm('cont');
			showPanel(0);
		}

	}

})();