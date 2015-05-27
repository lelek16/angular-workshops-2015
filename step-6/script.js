// Immediately invoked function

(function () {

  // Declaring avengers app, see ng-app="avengers"
  angular.module('avengers',[
        'ngRoute',
        'avengers.assembly'
      ])
      .config(function ($routeProvider) {
        $routeProvider
            .when('/avengers', {
              templateUrl: 'avengers.html',
              controller: 'AvengersCtrl',
              controllerAs: 'vm'
            })
            .when('/avenger/:avenger', {
              templateUrl: 'avenger.html',
              controller: 'AvengerCtrl',
              controllerAs: 'vm'
            })
            .otherwise({
              redirectTo: '/avengers'
            });
      })
      .controller('AvengersCtrl', AvengersCtrl)
      .controller('AvengerCtrl', AvengerCtrl);

  // Declaring our first controller
  function AvengersCtrl() {
    var vm = this;
    vm.avengers = listOfAvengers;
  }

  // Declaring our first controller
  function AvengerCtrl(Assembly) {
    var vm = this;
    vm.avenger = listOfAvengers[0];
    vm.assemblyMe = assemblyMe;

    function assemblyMe (avenger) {
      Assembly.assemblyAvenger(avenger);
    };
  }

  // We will take care of getting this list from the external source later
  var listOfAvengers = [
    {
      'shortName': 'ironman',
      'name': 'Iron Man',
      'realName': 'Anthony Edward "Tony" Stark',
      'species': 'human',
      'origin': 'Earth',
      'hasOwnSuperPowers': false,
      'abilities': [
        'Genius-level intellect',
        'Highly proficient scientist, engineer, and businessperson',
        'Has powered armored suit'
      ],
      'firstApperance': 1963,
      'createdBy': ['Stan Lee', 'Larry Lieber', 'Don Heck', 'Jack Kirby'],
      avatarURL: 'http://upload.wikimedia.org/wikipedia/en/e/e0/Iron_Man_bleeding_edge.jpg'
    },
    {
      'shortName': 'hulk',
      'name': 'Hulk',
      'realName': 'Robert Bruce Banner',
      'species': 'human mutant',
      'origin': 'Earth',
      'hasOwnSuperPowers': true,
      'abilities': [
        'Hulk\'s Smash',
        'Invulnerability',
        'Superhuman strength, stamina, durability, regeneration, speed and endurance'
      ]
    },
    {
      'shortName': 'thor',
      'name': 'Thor',
      'realName': 'Thor Odinson',
      'species': 'Asgardian',
      'origin': 'Asgard',
      'hasOwnSuperPowers': true,
      'abilities': [
        'Superhuman strength, endurance, and longevity',
        'Has Mjolnir'
      ]
    }
  ]

})();