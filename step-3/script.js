// Immediately invoked function
(function() {

    // Declaring avengers app, see ng-app="avengers"
    var app = angular.module('avengers', []);

    // Declaring our first controller
    var AvengersListCtrl = function() {
        /** vm means ViewModel */
        var vm = this;
        vm.avengers = listOfAvengers;
        vm.newAvenger = {
            name: '',
            realName: '',
            hasOwnSuperPowers: false
        };
        vm.addAvenger = addAvenger;

        /* Search query is an object */
        vm.search = {};

        function addAvenger(newAvenger) {
            vm.avengers.push(newAvenger);

            // Resets the form, note that two-way binding will take care of our view
            vm.newAvenger = {
                name: '',
                realName: '',
                hasOwnSuperPowers: false
            };
        }
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
    ];

}());