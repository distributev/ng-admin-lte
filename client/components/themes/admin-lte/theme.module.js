(function() {
  'use strict';

  angular.module('admin-lte', []);
  angular.module('ngAdminBootswatchApp').requires.push('admin-lte');
  angular.module('ngAdminBootswatchApp').run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$state = $state;
  }]);
})();
