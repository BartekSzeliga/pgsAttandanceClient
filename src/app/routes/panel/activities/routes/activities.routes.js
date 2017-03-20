(function () {
  'use strict';

  angular
    .module('pgsAttendance')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig(stateHelperProvider) {

    stateHelperProvider
      .state({
        name: 'panel.activities',
        url: '/panel/activities',
        views: {
          'content': {
            templateUrl: 'app/routes/panel/activities/activities.html',
            controller: '',
            data: {
              pageTitle: 'Activities'
            },
            access: {
              loginRequired: true
            }
          }


        }
      });

  }
})();




