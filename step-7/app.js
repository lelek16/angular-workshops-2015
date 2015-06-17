// Immediately invoked function

(function () {

  // Declaring avengers app, see ng-app="avengers"
  angular.module('avengers', [
    'ngRoute',
    'avengers.repo',
    'avengers.assembly'
  ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/avengers', {
          templateUrl: 'tpl-avengers-list',
          controller: 'AvengersCtrl',
          controllerAs: 'list'
        })
        .when('/avenger/:avenger/edit', {
          templateUrl: 'tpl-avenger-edit',
          controller: 'AvengerEditCtrl',
          controllerAs: 'edit'
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
    .controller('AvengerEditCtrl', AvengerEditCtrl)
    .filter('checkmark', CheckMarkFilter);

  function CheckMarkFilter() {
    function filter(input) {
      return input ? '\u2713' : '\u2718';
    }
    return filter;
  }

  // Declaring our first controller
  function AvengersCtrl(AvengersRepo) {
    var vm = this;
    vm.message = '';
    vm.avengers = AvengersRepo.query();

    vm.avengers.$promise.catch(function () {
      vm.message = "Unable to fetch Avengers Team";
    });
  }

  function AvengerCtrl($routeParams, AvengersRepo, Assembly) {
    var vm = this;
    vm.message = '';
    vm.assemblyMe = assemblyMe;
    fetchAvenger();


    function fetchAvenger() {
      vm.avenger = AvengersRepo.get({avengerId: $routeParams.avenger});
      vm.avenger.$promise.catch(function () {
        vm.message = 'No Avenger with id: ' + $routeParams.avenger;
      });
    }

    function assemblyMe(avenger) {
      Assembly.assemblyAvenger(avenger);
    }
  }

  function AvengerEditCtrl($routeParams, $location, AvengersRepo) {
    var vm = this;
    vm.avenger = AvengersRepo.get({avengerId: $routeParams.avenger});
    vm.updateAvenger = updateAvenger;

    function updateAvenger() {
      AvengersRepo.update(vm.avenger).$promise.then(function() {
        $location.path("/avenger/" + vm.avenger.id);
      });
    };
  }

})();