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

		angular.extend(vm, dat);

		// *** Setup
		//dataS.setUp();

		// Connect the handlers
		vm.edCnt = edCnt;
		vm.upCnt = upCnt;

		/////// Implementation ///////
		function upCnt(item) {
			if (vm.curItem !== 0) {
				vm.curItem.label = vm.cnt;
				vm.curItem.tpl = vm.tpl;
			} else {
			console.log('upCntIns:')
			console.log(item);
			return;
				var newItem = {};
				newItem.label = vm.cnt;
				newItem.tpl = vm.tpl;
				dat.push(newItem);
			}
			// Save the changes
			dataS.savCnt(dat);
			return;
		}

		function edCnt(item) {
			// Display the edit screen and set model
			vm.showEdCnt = true;
			// Is it an edit or add
			if(item !== 0) {
				vm.tpl = item.tpl;
				vm.cnt = item.label;
				// Save the item for updating
				vm.curItem = item;
			} else {
				vm.tpl = '';
				vm.cnt = '';
				vm.curItem = 0;
			}
		}

	}

})();