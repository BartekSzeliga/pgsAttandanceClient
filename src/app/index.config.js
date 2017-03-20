(function () {
  'use strict';

  angular
    .module('pgsAttendance')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, RestangularProvider) {



    // Enable log
    $logProvider.debugEnabled(true);


    RestangularProvider.setBaseUrl('http://localhost:8080/');
    RestangularProvider.setDefaultHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;



  }

})();
