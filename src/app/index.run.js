(function () {
  'use strict';

  angular
    .module('pgsAttendance')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $state, AuthService, Restangular, $window) {
    $rootScope.$state = $state;
    AuthService.initialize();
    $log.debug('runBlock end');

    Restangular.setErrorInterceptor(function (response) {
       //console.log("Brak Autoryzzacji");
      $window.localStorage.removeItem('token');
      $state.go('login.login');
    });


  }

})();
