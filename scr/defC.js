/*
mf:2014-11-26::defC.js
Default controller, gets content from a service and
extends the controller object.

*/
(function() {
	
	angular
		.module('app')
		.controller('defC', defC);

	defC.$inject = ['dataS'];

	function defC(dataS) {

		/* jshint validthis: true */
		var vm = this;
		var dat = dataS.getCnt();

		angular.extend(vm, dat);

		// *** Setup
		//dataS.setUp();

		/////// Implementation ///////

	}

})();