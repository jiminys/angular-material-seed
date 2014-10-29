(function () {

  /* @ngInject */
  function SidebarController($scope, $mdSidenav) {
    $scope.$on('open-sidebar', function (event, args) {
      $mdSidenav('left').open();
    });
  }

  angular
    .module('ng-material-seed').controller('SidebarController', SidebarController);

}());
