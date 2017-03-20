(function () {
  'use strict';

  angular
    .module('pgsAttendance')
    .controller('AppController', AppController);

  /** @ngInject */
  function AppController($window, $state, $scope) {
    var vm = this;
    vm.firstName = $window.localStorage.firstName;
    vm.lastName = $window.localStorage.lastName;

    vm.logout = logout;

    function logout() {

      $window.localStorage.removeItem('token');
      $state.go('login.login');

    }


  }
})();
