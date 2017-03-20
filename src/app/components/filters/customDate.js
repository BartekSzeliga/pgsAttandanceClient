(function () {
  'use strict';

  angular
    .module('pgsAttendance')
    .filter('customDate', customDate);

  /** @ngInject */
  function customDate($document) {

    return function(data) {
console.log(data);
     var newDate = new Date(data[0], data[1], data[2], data[3], data[4]);
     console.log(newDate);

      return newDate;

    }

  }

})();
