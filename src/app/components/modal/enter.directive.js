(function () {
  'use strict';

  angular
    .module('pgsAttendance')
    .directive('ngEnter', ngEnter);

  /** @ngInject */
  function ngEnter($document) {

    return {
      scope: {
        ngEnter: '&'
      },
      link: function (scope) {
        var enterWatcher = function (event) {
          if (event.which === 13) {
            scope.ngEnter();
            scope.$apply();
            event.preventDefault();
            $document.unbind('keydown keypress', enterWatcher);
          }
        };
        $document.bind('keydown keypress', enterWatcher);
      }
    };

  }

})();
