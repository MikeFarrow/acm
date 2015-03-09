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
		vm.flds = []; // create an array for the form fields

		var dat = getDat('cont');
		var tpl = getDat('tpls');
		var pgs = getDat('pgs');
		//var vm.showPan;

		// *** Setup

		// Connect the handlers
		vm.edFrm = edFrm;
		vm.upFrm = upFrm;
		vm.delFrm = delFrm;
		vm.showPanel = showPanel;

		/////// Implementation ///////

		// Get the data from storage
		function getDat(dType) {
			var promise = dataS.rget(dType);
			promise.then(
				function(result) {
					// Add the data to the scope
					angular.extend(vm, result);
				})
		}


		function showPanel(cPan){
			//console.log('showPanel: ' + iPan);
			vm.showPan = cPan;
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


		// Prepare and show add / edit form
		function edFrm(item, ind, dfrm, fdat) {
			// Display the edit screen and set model
			showPanel(dfrm);
	console.log(item);
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


		// Delete a data record
		function delFrm(fDat) {
			// Edited item
			if (vm.curItem !== 0) {
				// Delete the item from view
				vm[fDat].splice(vm.curItem.ind);
			}
			// Save the changes
			dataS.rsav(vm[fDat], fDat);
			// Clear the form
			cFrm(fDat);
			showPanel(0);
		}

	}

})();