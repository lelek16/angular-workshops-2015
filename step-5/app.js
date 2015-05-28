(function () {
  'use strict';
  angular.module('avengers', [
    'ngRoute',
    'avengers.repo'
  ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/avengers', {
          templateUrl: 'tpl-avengers-list',
          controller: 'AvengersController',
          controllerAs: 'list'
        })
        .when('/avenger/:avenger', {
          templateUrl: 'tpl-avenger',
          controller: 'AvengerController',
          controllerAs: 'details'
        })
        .otherwise({
          redirectTo: '/avengers'
        });
    })

    .controller('AvengersController', AvengersController)
    .controller('AvengerController', AvengerController)
    .filter('checkmark', CheckMarkFilter);


  function AvengersController(AvengersRepo) {
    var vm = this;
    vm.avengers = AvengersRepo.fetchAll();
  }

  function AvengerController($routeParams, AvengersRepo) {
    var vm = this;
    vm.avenger = AvengersRepo.fetchOne($routeParams.avenger);
  }

  function CheckMarkFilter() {
    function filter(input) {
      return input ? '\u2713' : '\u2718';
    }

    return filter;
  }
})();