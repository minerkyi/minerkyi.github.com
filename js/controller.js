(function(){
	
	var ctrl = angular.module(
			'ctrl',
			[],
			function(){}
	);
	
	ctrl.controller(
			'PhoneListCtrl',
			function($scope) {
				  $scope.phones = [
				    {"name": "Nexus S",
				     "snippet": "Fast just got faster with Nexus S."},
				    {"name": "Motorola XOOM™ with Wi-Fi",
				     "snippet": "The Next, Next Generation tablet."},
				    {"name": "MOTOROLA XOOM™",
				     "snippet": "The Next, Next Generation tablet."}
				  ];
			}
	);
})();