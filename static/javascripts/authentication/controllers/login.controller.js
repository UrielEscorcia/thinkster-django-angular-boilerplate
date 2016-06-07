(function () {
    'use strict';

    angular
        .module('thinkster.authentication.controllers')
        .controller('LoginController',['$location', '$scope', 'Authentication', function ($location, $scope, Authentication) {
            var vm = this;

            vm.login = function() {
                Authentication.login(vm.email, vm.password);
            };   
            
            activate();

            function activate() {
             // If the user is authenticated, they should not be here.
                if (Authentication.isAuthenticated()) {
                    $location.url('/');
                    console.log(Authentication.isAuthenticated())
                }
                console.log(Authentication.isAuthenticated())
            }

        }]);


})();
