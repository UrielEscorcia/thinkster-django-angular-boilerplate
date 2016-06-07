(function () {
    'use strict';

    angular
        .module('thinkster.routes')
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.
		        when('/register', {
		            templateUrl: '/static/templates/authentication/register.html',
		            controller: 'RegisterController',
                    controllerAs: 'vm'
		        })
                .otherwise('/');
        }]);


})();
