(function () {
  'use strict';

  angular
    .module('pgsAttendance')
    .controller('LogController', LogController);

  /** @ngInject */
  function LogController($state, AuthService, $window) {
    var vm = this;
    vm.login = login;

    vm.formDataSignin = {
      rememberMe: false
    };

    activate();

    function activate() {
    }

    function login() {

      AuthService.authenticate(vm.formDataSignin)
        .then(function (response) {
        })
        .catch(function (e) {
          vm.errors = ['Unknown error occurred. Please try again or check your internet connection.'];
          if (e.data.message) vm.errors = e.data.message;
        });
    }


  }
})();
