angular.module('associates').service('associatesService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];
    this.getAllAssociates = function() {
        return $http({
            method: 'GET',
            url: 'https://r51z.ucc.ovgu.de/zrest_service/company?sap-client=204',
            headers: {'Authorization': 'Basic ZGV2ZWxvcC0xMjA6MTNYWTc4c2IyMyE='}
         });
     }
});