// Immediately invoked function

(function () {

  // Declaring avengers app, see ng-app="avengers"
  angular.module('avengers', [
    'ngRoute',
    'avengers.assembly'
  ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/avengers', {
          templateUrl: 'tpl-avengers-list',
          controller: 'AvengersCtrl',
          controllerAs: 'list'
        })
        .when('/avenger/:avenger', {
          templateUrl: 'tpl-avenger',
          controller: 'AvengerCtrl',
          controllerAs: 'details'
        })
        .otherwise({
          redirectTo: '/avengers'
        });
    })
    .controller('AvengersCtrl', AvengersCtrl)
    .controller('AvengerCtrl', AvengerCtrl)
    .filter('checkmark', CheckMarkFilter);

  function CheckMarkFilter() {
    function filter(input) {
      return input ? '\u2713' : '\u2718';
    }
    return filter;
  }

  // Declaring our first controller
  function AvengersCtrl() {
    var vm = this;
    vm.avengers = listOfAvengers;
  }

  function AvengerCtrl($routeParams, Assembly) {
    var vm = this;
    vm.avenger = listOfAvengers[$routeParams.avenger];
    vm.assemblyMe = assemblyMe;

    function assemblyMe(avenger) {
      Assembly.assemblyAvenger(avenger);
    }
    ;
  }

  // We will take care of getting this list from the external source later
  var listOfAvengers = [
    {
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
      'avatarURL': 'http://upload.wikimedia.org/wikipedia/en/e/e0/Iron_Man_bleeding_edge.jpg'
    },
    {
      'name': 'Hulk',
      'realName': 'Robert Bruce Banner',
      'species': 'human mutant',
      'origin': 'Earth',
      'hasOwnSuperPowers': true,
      'abilities': [
        'Hulk\'s Smash',
        'Invulnerability',
        'Superhuman strength, stamina, durability, regeneration, speed and endurance'
      ],
      'firstApperance': 1962,
      'createdBy': ['Stan Lee', 'Jack Kirby'],
      'avatarURL': 'http://upload.wikimedia.org/wikipedia/en/3/3e/Incredible-hulk-20060221015639117.jpg'
    },
    {
      'name': 'Thor',
      'realName': 'Thor Odinson',
      'species': 'Asgardian',
      'origin': 'Asgard',
      'hasOwnSuperPowers': true,
      'abilities': [
        'Superhuman strength, endurance, and longevity',
        'Has Mjolnir'
      ],
      'firstApperance': 1962,
      'createdBy': ['Stan Lee', 'Larry Lieber', 'Jack Kirby'],
      'avatarURL': 'http://upload.wikimedia.org/wikipedia/en/4/41/Thor-272.jpg'
    }
  ];
})();