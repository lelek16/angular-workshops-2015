// Immediately invoked function

(function () {
  angular.module('avengers.repo', ['ngResource'])
    .service('AvengersRepo', AvengersRepo);

  function AvengersRepo($resource) {
    return $resource('http://localhost:8080/bill/avengers/:avengerId', {avengerId: '@id'},
    {
      'update': {method: 'PUT'}
    }
    );
  }
})();