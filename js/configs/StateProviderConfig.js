app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'pages/menu.html',
    controller: 'menuctrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'pages/home.html',
        controller:'homectrl'
      }
    }
  })
   .state('app.dash', {
    url: '/dash',
    views: {
      'menuContent': {
        templateUrl: 'pages/dash.html',
        controller:'dashctrl'
      }
    }
  })
   .state('app.sobre', {
    url: '/sobre',
    views: {
      'menuContent': {
        templateUrl: 'pages/sobre.html',
        controller:'sobrectrl'
      }
    }
  })
  .state('app.ajuda', {
   url: '/ajuda',
   views: {
     'menuContent': {
       templateUrl: 'pages/ajuda.html',
       controller:'ajudactrl'
     }
   }
 })
  .state('app.imagem', {
   url: '/imagem/:id',
   views: {
     'menuContent': {
       templateUrl: 'pages/image.html',
       controller: 'ImageCtrl'
     }
   }
 })
  $urlRouterProvider.otherwise('/app/home');
})
