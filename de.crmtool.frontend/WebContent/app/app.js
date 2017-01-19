var crmAppModule = angular.module('crmApp', [
	'ngRoute'
]);

crmAppModule.config([
	'$routeProvider', function($routeProvider) {

        $routeProvider.when('/associates', {
	        templateUrl : 'app/components/associates/associatesView.html',
	        controller : 'AssociatesCtrl'
	    }).when('/calendar', {
	        templateUrl : 'app/components/calendar/calendarView.html',
	        controller : 'CalendarCtrl'
	    }).when('/profile', {
	        templateUrl : 'app/components/profile/profileView.html',
	        controller : 'ProfileCtrl'
	    }).otherwise({
	        redirectTo : '/'
	    });
		
}]);