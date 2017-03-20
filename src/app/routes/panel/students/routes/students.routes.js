(function () {
  'use strict';

  angular
    .module('pgsAttendance')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig(stateHelperProvider) {

    stateHelperProvider
      .state({
        name: 'panel.students',
        url: '/panel/students',
        views: {
          'content': {
            templateUrl: 'app/routes/panel/students/students.html',
            controller: '',
            data: {
              pageTitle: 'students'
            },
            access: {
              loginRequired: true
            }
          }


        }
      });

  }
})();




