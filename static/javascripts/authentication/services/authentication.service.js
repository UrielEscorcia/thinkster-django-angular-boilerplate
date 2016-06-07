(function () {

    'use strict';


    angular.module('thinkster.authentication.services')
        .factory('Authentication',['$cookies', '$http', function ($cookies, $http) {

            var register = function(email, password, username) {
                return $http.post('/api/v1/accounts/', {
                    username: username,
                    password: password,
                    email: email
                }).then(function(data, status, headers, config) {
                    login(email, password);
                  }, function(data, status, headers, config) {
                    console.error('Epic failure!');
                  });
            };

            var login = function(email, password) {
                return $http.post('/api/v1/auth/login/', {
                    email: email,
                    password: password
                }).then(function(data, status, headers, config) {
                    setAuthenticatedAccount(data.data);
                    window.location = '/';
                  }, function(data, status, headers, config) {
                    console.error('Epic failure!');
                });
            };

            var logout = function() {
                return $http.post('/api/v1/auth/logout/')
                    .then(function(data, status, headers, config) {
                        unauthenticate();
                        window.location = '/';
                    }, function(data, status, headers, config) {
                        console.error('Epic failure!');
                    });
            };

            var getAuthenticatedAccount = function() {
                if (!$cookies.authenticatedAccount) {
                    return;
                }

                return JSON.parse($cookies.authenticatedAccount);
            };

            var isAuthenticated = function() {
                 return !!$cookies.authenticatedAccount;
            };

            var setAuthenticatedAccount = function(account) {
                $cookies.authenticatedAccount = JSON.stringify(account);
            };

            var unauthenticate = function() {
                delete $cookies.authenticatedAccount;
            };

            return {
                getAuthenticatedAccount: getAuthenticatedAccount,
                isAuthenticated: isAuthenticated,
                login: login,
                logout: logout,
                register: register,
                setAuthenticatedAccount: setAuthenticatedAccount,
                unauthenticate: unauthenticate
            };

        }]);



})();
