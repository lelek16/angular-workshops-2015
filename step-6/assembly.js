// Immediately invoked function

(function () {
  angular.module('avengers.assembly', [])
      .service('Assembly', Assembly)
      .directive('assembledAvengers', assembledAvengers);

  function Assembly() {
    var assembledAvengers = [];
    return {
      assemblyAvenger: function (avenger) {
        assembledAvengers.push(avenger);
      },
      assembled: function () {
        return assembledAvengers;
      }
    };
  }
  
  
  function assembledAvengers(Assembly) {
    return {
      restrict: 'A',
      templateUrl: 'avengers.assembly.html',
      link: function($scope, elment, attr) {
        $scope.assembledAvengers = Assembly.assembled();
      }
    };
  }
  
})();