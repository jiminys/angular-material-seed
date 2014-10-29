(function () {

  /* @ngInject */
  function ToolbarController($scope, $rootScope) {
    $scope.openSidebar = function () {
      $rootScope.$broadcast('open-sidebar', {});
    };
  }

  angular
    .module('ng-material-seed').controller('ToolbarController', ToolbarController);

}());
