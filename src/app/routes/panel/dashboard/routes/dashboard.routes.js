(function () {
  'use strict';

  angular
    .module('pgsAttendance')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig(stateHelperProvider) {

    stateHelperProvider
      .state({
        name: 'panel.dashboard',
        url: '/panel/dashboard',
        views: {
          'content': {
            templateUrl: 'app/routes/panel/dashboard/dashboard.html',
            controller: '',
            data: {
              pageTitle: 'DashBoard'
            },
            access: {
              loginRequired: true
            }
          }


        }
      });

  }
})();




