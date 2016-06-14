(function () {

    'use strict';

    angular
        .module('thinkster', [
            'thinkster.config',
            'thinkster.routes',
            'thinkster.authentication',
            'thinkster.layout',
            'thinkster.posts'
        ]);

    angular
        .module('thinkster.config', []);

    angular
        .module('thinkster.routes', ['ngRoute']);

    angular
        .module('thinkster')
        .run(['$http', function ($http) {
            $http.defaults.xsrfHeaderName = 'X-CSRFToken';
            $http.defaults.xsrfCookieName = 'csrftoken';
        }]);

})();



