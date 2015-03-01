(function() {
	'use strict';

	angular
	.module('app')
	.directive('dyDir', dyDir);

	dyDir.$inject = ['$compile', '$filter', 'dataS'];

	function dyDir($compile, $filter, dataS) {
		//var aTpl = dataS.getTplSt();
		//
		var directive = {
			link: linker,
			restrict: 'A',
		};
		return directive;

		function linker(scope, element, attrs) {
			// Get the template data
			var promise = dataS.rget('tpls');
			promise.then(
				function(result) {
					// Get the template and compile it
					element.html(getTemplate(attrs.dyDir, result));
					$compile(element.contents())(scope);
				})
		}

		function getTemplate (type, aTpl) {
			// Get the template which matches the current content type
			var tpl = $filter('getByProp')('type', type, aTpl.tpls);
			return tpl.tpl;
		}

	}
})();
