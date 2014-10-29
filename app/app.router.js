'use strict';

(function () {

  /* @ngInject */
  function Router($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'modules/main/main.template.html',
        controller: 'MainController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

  angular
    .module('ng-material-seed')
    .config(Router);

}());
