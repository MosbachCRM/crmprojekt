angular.module('associates', []);
angular.module('authentication', []);

var crmAppModule = angular.module('crmApp', [
	'ngRoute', 'ngCookies', 'ngMaterial', 'mdDataTable', 'ngMdIcons', 'ngSanitize', 'ngMessages', 'sidebarController', 'associates', 
	'calendarController', 'profileController', 'authentication', 'base64'
]);

crmAppModule.config([
	'$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
		
        $routeProvider.when('/login', {
        	templateUrl: 'app/components/authentication/authenticationView.html',
            controller: 'AuthenticationCtrl',
            hideMenus: true
        }).when('/associates', {
	        templateUrl : 'app/components/associates/associatesView.html',
	        controller : 'AssociatesCtrl'
	    }).when('/calendar', {
	        templateUrl : 'app/components/calendar/calendarView.html',
	        controller : 'CalendarCtrl'
	    }).when('/profile', {
	        templateUrl : 'app/components/profile/profileView.html',
	        controller : 'ProfileCtrl'
	    }).otherwise({
	        redirectTo : '/login'
	    });
        
}])

.run(['$rootScope', '$location', '$cookies', '$cookieStore', '$http',
    function ($rootScope, $location, $cookies, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
 
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        
            $rootScope.go = function(path) {
            	$location.path(path);
                };
                $http.defaults.headers.common['Authorization'] = $cookies.get('globals');

        });
        
    }]);