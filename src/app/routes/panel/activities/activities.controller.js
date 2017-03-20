(function () {
  'use strict';

  angular
    .module('pgsAttendance')
    .controller('ActivitiesController', ActivitiesController);

  /** @ngInject */
  function ActivitiesController($timeout, $uibModal, ActivitiesService) {
    var vm = this;

    vm.activities = [];
    vm.open = open;
    vm.edit = edit;
    vm.delete = deleteuser;

    activate();

    function open(size) {
      var modalInstance = $uibModal.open({
        animation: vm.animationsEnabled,
        templateUrl: 'CreateActivity.html',
        controller: 'ActivityModalInstanceCtrl',
        controllerAs: 'vm',
        size: size,
        resolve: {
          items: function () {
            return vm.items;
          }
        }
      });

      modalInstance.result.then(function (result) {
        getActivities();
      });
    }

    function edit(obj, size) {
      var modalInstance = $uibModal.open({
        animation: vm.animationsEnabled,
        templateUrl: 'EditActivity.html',
        controller: 'ActivityModalEditCtrl',
        controllerAs: 'vm',
        size: size,
        resolve: {
          items: function () {
            return vm.items;
          }
        }
      });
      if (obj) {
        modalInstance.formData = angular.copy(obj);
        vm.formData = modalInstance.formData;
      }
      modalInstance.result.then(function (result) {
        getActivities();
      });
    }

    function deleteuser(id) {
      ActivitiesService
        .delete(id)
        .then(function (response) {
          getActivities();
        }, function (e) {
          vm.errors = e.data.errors;
        });
    }


    function activate() {
      vm.formData = [];
      getActivities();
      $timeout(function () {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function getActivities() {
      return ActivitiesService.getAll().then(function (data) {
        vm.activities = data.activityDTOS;
        return vm.activities;
      });
    }
  }
})();
