(function () {
    'use strict';
    
    angular.
        module('thinkster.posts.services')
        .factory('Posts', ['$http', function ($http) {

            var all = function () {
                return $http.get('/api/v1/posts/');
            };

            var create = function (content) {
                return $http.post('/api/v1/posts/', {
                    content: content
                });
            };

            var get = function (username) {
                return $http.get('/api/v1/accounts/' + username + '/posts/');
            };

            return {
                all: all,
                create: create,
                get: get
            };


        }]);

})();

