(function () {
  'use strict';

  angular
    .module('pgsAttendance')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig(stateHelperProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/panel/dashboard');

    stateHelperProvider

    /* LOGIN */
      .state({
        name: 'login',
        views: {
          'master': {
            templateUrl: 'app/routes/login/auth.view.html'
          }
        },
        children: []
      })
    /* PANEL */
  .state({
      name: 'panel',
      views: {
        'master': {
          templateUrl: 'app/routes/panel/panel.view.html'
        },
        'header@panel': {
          templateUrl: 'app/routes/panel/_layout/header/header.html',
          controller: ''
        }
      },
      children: []
    });

  }

})();
