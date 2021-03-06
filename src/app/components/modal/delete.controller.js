(function () {
  'use strict';

  angular
    .module('pgsAttendance')
    .controller('DeleteModalController', DeleteModalController);

  /** @ngInject */
  function DeleteModalController($uibModalInstance) {
    var vm = this;

    vm.ok = ok;
    vm.cancel = cancel;

    function ok() {
      $uibModalInstance.close();
    }

    function cancel() {
      $uibModalInstance.dismiss();
    }

  }
})();
