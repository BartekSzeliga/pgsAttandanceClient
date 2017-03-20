(function () {
  'use strict';

  angular
    .module('pgsAttendance')
    .controller('ActivityModalEditCtrl', ActivityModalEditCtrl);

  /** @ngInject */
  function ActivityModalEditCtrl($uibModalInstance,items, ActivitiesService) {
    var vm = this;

    vm.formData = [];

    vm.ok = ok;
    vm.cancel = cancel;

    activate();

    function activate() {
      vm.formData = $uibModalInstance.formData;
    }

    function ok() {
      ActivitiesService
        .update(vm.formData.id,vm.formData)
        .then(function (response) {
          $uibModalInstance.close(response);
        }, function (e) {
          vm.errors = e.data.errors;
        });
    }

     function cancel () {
      $uibModalInstance.dismiss('cancel');
    }

  }
})();
