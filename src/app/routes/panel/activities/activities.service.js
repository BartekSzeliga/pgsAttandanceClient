(function () {
  'use strict';

  angular
    .module('pgsAttendance')
    .service('ActivitiesService', ActivitiesService);

  /* @ngInject */
  function ActivitiesService(Restangular, $window) {
    var vm = this;

    vm.getAll = getAll;
    vm.create = create;
    vm.update = update;
    vm.delete = del;

    var url = "/api/activity/";

    function getAll() {
      var request = Restangular.one(url).get();

      return request.then(function (results) {
        return results;
      });
    }

    function create(obj) {
      var request = Restangular.all(url).post(obj);

      return request.then(function (results) {
        return results;
      });
    }

    function update(id, obj) {
      var request = Restangular.all(url + id).customPUT(obj);

      return request.then(function (results) {
        return results;
      });
    }

    function del(id) {
      var request = Restangular.one(url + id).remove();

      return request.then(function (results) {
        return results;
      });
    }


  }
})();
