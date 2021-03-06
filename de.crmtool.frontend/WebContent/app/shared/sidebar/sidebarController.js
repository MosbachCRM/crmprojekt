var sidebarController = angular.module('sidebarController', []);

sidebarController.controller('SidebarCtrl', [
	'$scope', '$timeout', '$mdSidenav', '$log', '$location', function ($scope, $timeout, $mdSidenav, $log, $location) {
    
		$scope.toggleLeft = buildDelayedToggler('left');
    
    $scope.showSidebar = false;
    $scope.$on('$routeChangeSuccess', function(){
        // logic here to show/hide based upon $location.path()
        var path = $location.path();
        if (path === '/login'){
            $scope.showSidebar = false;
        } else {
            $scope.showSidebar = true;
        }
    });

    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;

      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }

    function buildToggler(navID) {
      return function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }
    }
  }])
  .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });

    };
  });