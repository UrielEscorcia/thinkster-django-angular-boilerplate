(function () {
    'use strict';

    angular
        .module('thinkster.config')
        .config(['$locationProvider', function ($locationProvider) {
            $locationProvider.html5Mode(true);
            $locationProvider.hashPrefix('!');
        }]);
    
})();
