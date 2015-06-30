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
	  disassemblyAvenger: function (avenger) {
        delete assembledAvengers[avenger.name];
      },
      assembled: function () {
        return assembledAvengers;
      }
    };
  }

  function assembledAvengers(Assembly) {
    return {
      restrict: 'A',
      template:
        '<div class="row">' +
          '<h4>Avengers! Who is assembled?</h4>' +
          '<ul>' +
            '<li ng-repeat="av in assembledAvengers">' +
              '{{av.name}}' +
            '</li>' +
          '</ul>' +
          '<p ng-show="assembledAvengers.length < 1">No one is assembled :/</p>' +
        '</div>',
      link: link
    };

    function link($scope, element, attr) {
      //Here goes business logic
      $scope.assembledAvengers = Assembly.assembled();

      //You can also modify DOM element like with jquery
      element.on("click", function () {
        element.css("color", "red");
      });
    }

  }
})();