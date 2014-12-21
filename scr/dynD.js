(function() {
	'use strict';

	angular
	.module('app')
	.directive('dyDir', dyDir);

	dyDir.$inject = ['$compile', '$filter', 'dataS'];

	function dyDir($compile, $filter, dataS) {
		var aTpl = dataS.getTpl();
		//
		var directive = {
			link: linker,
			restrict: 'A',
		};
		return directive;

		function linker(scope, element, attrs) {
			/* */
			element.html(getTemplate(attrs.dyDir));
			$compile(element.contents())(scope);
		}

		function getTemplate (type) {
			// Get the template which matches the current content type
			var tpl = $filter('getByProp')('type', type, aTpl.tpls);
			return tpl.tpl;

		}

	}
})();
