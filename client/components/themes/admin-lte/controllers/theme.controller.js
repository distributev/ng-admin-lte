(function() {
  'use strict';

  angular
    .module('admin-lte')
    .controller('ThemeController', ThemeController);

  ThemeController.$inject = ['$scope'];

  function ThemeController($scope) {
    var vm = this;
    vm.isLoggedIn = false;

    activate();

    function activate() {
      $.AdminLTE.layout.activate();
    }

    $scope.$watch('Auth.getCurrentUser().token', function(newVal) {
      vm.isLoggedIn = newVal ? true : false;
    });
  }
})();

