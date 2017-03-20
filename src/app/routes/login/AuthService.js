/*eslint-disable*/
(function () {
  'use strict';

  angular
    .module('pgsAttendance')
    .service('AuthService', AuthService);

  /** @ngInject */
  function AuthService(Restangular, $log, $state, $rootScope, $window) {
    var vm = this;

    vm.authenticate = authenticate;
    vm.initialize = initialize;

    function initialize() {

      $rootScope.$on('$stateChangeStart', function (e, toState) {

        if (toState.views.content.access && toState.views.content.access.loginRequired) {
          $log.log("login required");
          // check if user logged
          if ($window.localStorage.token) {
            Restangular.setDefaultHeaders({Authorization: 'Bearer ' + $window.localStorage.token});
          } else {
            e.preventDefault();
            $state.go('login.login');
          }
        }
      });
    }

    function authenticate(credentials) {

      var request = Restangular.all('/user/login').post(credentials);

      return request.then(function (results) {
        $window.localStorage.token = results.token;
        $window.localStorage.id = results.id;
        $window.localStorage.firstName = results.firstName;
        $window.localStorage.lastName = results.lastName;
        $window.localStorage.role = results.roles[0];
        console.log($window.localStorage);

        $state.go('panel.dashboard');
      });

    }


  }

})();

