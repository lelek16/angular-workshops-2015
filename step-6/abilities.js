// Immediately invoked function

(function () {
  angular.module('avengers.ability', [])
    .service('Ability', Ability)
    .directive('avengerAbilities', avengerAbilities);

  function Ability() {
    var avengerAbilities = {};
    return {
      showAbilities: function (avenger) {
		// avengerAbilities[avenger.name] = avenger.abilities;
		for (ability in avenger.abilities) {
			avengerAbilities[ability] = avenger.abilities[ability];
		}
      },
      abilities: function () {
        return avengerAbilities;
      }
    };
  }

  function avengerAbilities(Ability) {
    return {
      restrict: 'A',
      template:
        '<div class="row">' +
          '<ul>' +
            '<li ng-repeat="ab in avengerAbilities">' +
              '{{ab}}' +
            '</li>' +
          '</ul>' +
        '</div>',
      link: link
    };

    function link($scope, element, attr) {
      $scope.avengerAbilities = Ability.abilities();
    }

  }
})();