(function () {
  'use strict';
  angular.module('avengers', ['ngRoute'])
      .config(function ($routeProvider) {
        $routeProvider
            .when('/avengers', {
              templateUrl: 'avengers.html',
              controller: 'AvengersController'
            })
            .when('/avenger/:avenger', {
              templateUrl: 'avenger.html',
              controller: 'AvengerController'
            })
            .otherwise({
              redirectTo: '/avengers'
            });
      })

      .controller('AvengersController', AvengersController)
      .controller('AvengerController', AvengerController);


  function AvengersController($scope) {
    $scope.avengers = {
      spiderman: {
        fullName: 'Spider-Man',
        alterEgo: 'Peter Benjamin Parker',
        superPowers: ['Superhuman strength and agility', 'Precognitive Spider-sense'],
        firstApperance: 1962,
        createdBy: ['Stan Lee', 'Steve Ditko'],
        avatarURL: 'http://upload.wikimedia.org/wikipedia/en/0/0c/Spiderman50.jpg'
      },
      ironman: {
        fullName: 'Iron Man',
        alterEgo: 'Anthony Edward "Tony" Stark',
        superPowers: ['Genius-level intellect', 'Highly proficient scientist, engineer, and businessperson'],
        firstApperance: 1963,
        createdBy: ['Stan Lee', 'Larry Lieber', 'Don Heck', 'Jack Kirby'],
        avatarURL: 'http://upload.wikimedia.org/wikipedia/en/e/e0/Iron_Man_bleeding_edge.jpg'
      }
    };
  }

  function AvengerController($scope, $routeParams) {
    var avengers = {
      spiderman: {
        fullName: 'Spider-Man',
        alterEgo: 'Peter Benjamin Parker',
        superPowers: ['Superhuman strength and agility', 'Precognitive Spider-sense'],
        firstApperance: 1962,
        createdBy: ['Stan Lee', 'Steve Ditko'],
        avatarURL: 'http://upload.wikimedia.org/wikipedia/en/0/0c/Spiderman50.jpg'
      },
      ironman: {
        fullName: 'Iron Man',
        alterEgo: 'Anthony Edward "Tony" Stark',
        superPowers: ['Genius-level intellect', 'Highly proficient scientist, engineer, and businessperson'],
        firstApperance: 1963,
        createdBy: ['Stan Lee', 'Larry Lieber', 'Don Heck', 'Jack Kirby'],
        avatarURL: 'http://upload.wikimedia.org/wikipedia/en/e/e0/Iron_Man_bleeding_edge.jpg'
      }
    };
    
    $scope.avenger = avengers[$routeParams.avenger]
    
    
    
  }
})();