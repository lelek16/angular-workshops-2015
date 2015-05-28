// Immediately invoked function

(function () {
  angular.module('avengers.repo', [])
    .service('AvengersRepo', AvengersRepo);

  function AvengersRepo() {
    var avengers = listOfAvengers;
    return {
      fetchAll: function () {
        return avengers;
      },
      fetchOne: function (index) {
        return avengers[index];
      }
    };
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