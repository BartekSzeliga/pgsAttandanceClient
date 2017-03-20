(function () {
  'use strict';

  angular
    .module('pgsAttendance')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig(stateHelperProvider) {

    stateHelperProvider
      .state({
        name: 'login.login',
        url: '/login',
        views: {
          'content': {
            templateUrl: 'app/routes/login/login.html',
            controller: 'LogController as vm',
            data: {
              pageTitle: 'Login'
            },
            access: {
              loginRequired: false
            }
          }


        }
      });

  }
})();




