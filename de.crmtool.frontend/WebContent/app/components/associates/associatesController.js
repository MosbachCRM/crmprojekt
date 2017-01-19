var associatesController = angular.module('associatesController', []);

associatesController.controller('AssociatesCtrl', [
	'$scope', '$route', '$http', '$location', function($scope, $route, $http, $location){
       	$http.get('http://r51z.ucc.ovgu.de:8000/zrest_service?sap-client=204')
    	.then(function successCallback(response) {
    		$scope.associates = response.data;
    	});
	}]);

