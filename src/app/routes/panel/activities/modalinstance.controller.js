(function () {
  'use strict';

  angular
    .module('pgsAttendance')
    .controller('ActivityModalInstanceCtrl', ActivityModalInstanceCtrl);

  /** @ngInject */
  function ActivityModalInstanceCtrl($uibModalInstance, items, ActivitiesService, $scope) {
    var vm = this;

    vm.formData = [];

    vm.ok = ok;
    vm.cancel = cancel;

    activate();

    function activate() {
      vm.formData = {};

    }

    function ok() {
      ActivitiesService
        .create(vm.formData)
        .then(function (response) {

          $uibModalInstance.close(response);


        }, function (e) {
          vm.errors = e.data.errors;
        });
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }

  }
})();
