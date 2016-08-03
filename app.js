angular.module('accidentApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/homeTemp.html',
      controller: 'mainCtrl',
    })
    .state('', {
      url: '/'
    })
})
