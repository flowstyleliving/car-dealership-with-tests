namespace app {
  angular.module('app', ['ui.router', 'ngResource', 'ui.bootstrap',])
  .config((
    $stateProvider: ng.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider,
    //where it is relavtively
    $locationProvider: ng.ILocationProvider
  ) => {
    $stateProvider.state('Home', {
      url: '/',
      templateUrl: '/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    })
    .state('About Me', {
      url: '/about',
      templateUrl: '/templates/about.html'
    })

    $urlRouterProvider.otherwise('/');
    //takes out the # from localhost:3000/#
    $locationProvider.html5Mode(true);
  });
}
