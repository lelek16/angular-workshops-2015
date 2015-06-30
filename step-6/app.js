// Immediately invoked function

(function () {

  // Declaring avengers app, see ng-app="avengers"
  angular.module('avengers', [
    'ngRoute',
    'avengers.repo',
    'avengers.assembly',
	'avengers.ability'
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

  function AvengerCtrl($routeParams, AvengersRepo, Assembly, Ability) {
    var vm = this;
    vm.avenger = AvengersRepo.fetchOne($routeParams.avenger);
    vm.assemblyMe = assemblyMe;
    vm.disassemblyMe = disassemblyMe;
	vm.toggleAbilities = toggleAbilities;

    function assemblyMe(avenger) {
      Assembly.assemblyAvenger(avenger);
    }
	function disassemblyMe(avenger) {
      Assembly.disassemblyAvenger(avenger);
    }
	function toggleAbilities(avenger) {
		var elem = document.getElementById('abilities');
		
		Ability.showAbilities(avenger);
		
		if (elem.offsetParent === null)
			elem.style['display'] = 'block';
		else
			elem.style['display'] = 'none';
	}
	
  }
})();