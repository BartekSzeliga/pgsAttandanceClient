(function () {
  'use strict';

  angular
    .module('pgsAttendance')
    .service('ngTableService', ngTableService);

  /* @ngInject */
  function ngTableService(NgTableParams, $filter) {
    var vm = this;

    vm.init = init;

    function init(obj, counts) {
      vm.list = [];
      vm.search = '';

      vm.table = new NgTableParams(obj || {page: 1, count: 10, sorting: {'id': 'asc'}}, {
        counts: counts || [5, 10, 20, 50],
        getData: function ($defer, params) {
          var filteredData = params.filter() ? $filter('filter')(vm.list, vm.search) : vm.list;
          var orderedData = params.sorting() ? $filter('orderBy')(filteredData, params.orderBy()) : filteredData;
          params.total(orderedData.length);

          if (orderedData.length > 0) {
            var lastPage = (1 + Math.floor((orderedData.length - 1) / params.count()));
            if (params.page() > lastPage) {
              params.page(lastPage);
            }
          } else if (params.page() !== 1) {
            params.page(1);
          }

          $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
      });

      return vm.table;
    }

  }
})();
