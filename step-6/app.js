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
  function AvengersCtrl(AvengersRepo) {
    var vm = this;
    vm.avengers = AvengersRepo.fetchAll();
  }

  function AvengerCtrl($routeParams, AvengersRepo, Assembly) {
    var vm = this;
    vm.avenger = AvengersRepo.fetchOne($routeParams.avenger);
    vm.assemblyMe = assemblyMe;

    function assemblyMe(avenger) {
      Assembly.assemblyAvenger(avenger);
    }
  }
})();