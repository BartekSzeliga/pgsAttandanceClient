(function () {
  'use strict';

  angular
    .module('pgsAttendance')
    .controller('FormModalController', FormModalController);

  /** @ngInject */
  function FormModalController($uibModalInstance) {
    var vm = this;

    vm.formData = [];

    vm.ok = ok;
    vm.cancel = cancel;

    activate();

    function activate() {
      vm.formData = $uibModalInstance.formData;
    }

    function ok() {
      $uibModalInstance.close(vm.formData);
    }

    function cancel() {
      $uibModalInstance.dismiss();
    }

  }
})();
