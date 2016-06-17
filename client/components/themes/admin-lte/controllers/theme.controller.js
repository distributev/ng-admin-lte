(function() {
  'use strict';

  angular
    .module('admin-lte')
    .controller('ThemeController', ThemeController);

  ThemeController.$inject = ['$scope', 'Auth', 'ThemeStyleService'];

  function ThemeController($scope, Auth, ThemeStyleService) {
    var vm = this;
    vm.isLoggedIn = false;

    activate();

    function activate() {
      $.AdminLTE.layout.activate();
      ThemeStyleService.toggleMiniSidebar(true);
    }

    $scope.$watch('Auth.getCurrentUser().token', function(newVal) {
      vm.isLoggedIn = newVal ? true : false;

      var userTheme = Auth.getCurrentUser().theme;
      ThemeStyleService.changeSkin(userTheme);
    });
  }
})();
