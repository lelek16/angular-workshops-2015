// Immediately invoked function

(function () {
  angular.module('avengers.assembly', [])
    .service('Assembly', Assembly)
    .directive('assembledAvengers', assembledAvengers);

  function Assembly() {
    var assembledAvengers = {};
    return {
      assemblyAvenger: function (avenger) {
        assembledAvengers[avenger.name] = avenger;
      },
      assembled: function () {
        return assembledAvengers;
      }
    };
  }

  function assembledAvengers(Assembly) {
    return {
      restrict: 'A',
      templateUrl: 'tpl-avengers-assembly',
      link: function ($scope, element, attr) {
        //Here goes business logic
        $scope.assembledAvengers = Assembly.assembled();
        
        //You can also modify DOM element like with jquery
        element.on("click", function () {
          element.css("color","red");
        });
      }
    };
  }

})();