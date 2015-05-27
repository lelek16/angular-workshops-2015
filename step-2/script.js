// Immediately invoked function

(function() {

    // Declaring avengers app, see ng-app="avengers"
    var app = angular.module('avengers', []);

    // Declaring our first controller
    var AvengersListCtrl = function() {
        this.avengers = listOfAvengers;
    };

    // And attaching it to our avengers app
    app.controller('AvengersListCtrl', AvengersListCtrl);

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
            ]
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
            ]
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
            ]
        }
    ]

})();