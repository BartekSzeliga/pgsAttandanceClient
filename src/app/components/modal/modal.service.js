(function () {
  'use strict';

  angular
    .module('pgsAttendance')
    .service('ModalService', ModalService);

  /* @ngInject */
  function ModalService($uibModal, $templateRequest) {
    var vm = this;

    vm.form = form;
    vm.delete = del;

    function form(templateUrl, data, ctrl, size) {
      $templateRequest(templateUrl);

      var controller = ctrl || 'FormModalController';

      var modal = $uibModal.open({
        templateUrl: templateUrl,
        controller: controller,
        controllerAs: 'vm',
        size: size || 'lm',
        backdrop: 'static'
      });

      if (data) {
        modal.formData = angular.copy(data);
      }

      return modal;
    }

    function del(templateUrl) {
      $templateRequest(templateUrl);

      return $uibModal.open({
        templateUrl: templateUrl,
        controller: 'DeleteModalController as vm',
        size: 'sm'
      });
    }

  }
})();
