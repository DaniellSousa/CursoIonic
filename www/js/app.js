// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers',
  'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

// .config(function($stateProvider, $urlRouterProvider){
//   $urlRouterProvider.otherwise('/')

//   // $ionicConfigProvider.tabs.position('bottom');

//   $stateProvider

//   .state('home', {
//     url: '/home',
//     views: {
//       home: {
//         templateUrl: 'views/home.html'
//       }
//     } 
//   })

//   .state('help', {
//     url: '/help',
//     views: {
//       help: {
//         templateUrl: 'views/help.html'
//       }
//     } 
//   })

//   .state('lista', {
//     url: '/lista',
//     views: {
//       lista: {
//         templateUrl: 'views/lista.html',
//         controller: 'listaCtrl'
//       }
//     } 
//   });
// })

// .controller('listaCtrl', function($scope) {
//     $scope.lista = [
//       {title: "Take out tha trash", done: true},
//       {title: "Do laundry", done: false},
//       {title: "Start cooking dinner", done: false}
//     ]
// })

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/tab/home')

  $stateProvider

  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html'
      }
    }
  })

  .state('tab.news', {
    url: '/news',
    views: {
      'tab-news': {
        templateUrl: 'templates/tab-news.html',
        controller: 'newsCtrl'
      }
    }
  })

  .state('tab.noticia-detalhe', {
    url: '/news/:noticiaId',
    views: {
      'tab-news': {
        templateUrl: 'templates/noticia-detalhe.html',
        controller: 'noticiaCtrl'
      }
    }
  });

})












