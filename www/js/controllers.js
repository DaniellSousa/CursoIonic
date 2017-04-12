angular.module('starter.controllers', [])
	
	// .controller('newsCtrl', function ($scope, News) {
	// 	$scope.news = News.all();
	// })

	// .controller('noticiaCtrl', function($scope, $stateParams, News){
	// 	$scope.noticia = News.get($stateParams.noticiaId);
	// })

	.controller('homeCtrl', function($scope, Items, $ionicModal) {
		$scope.items = Items;

		$scope.addItem = function(newname) {
			if (newname) {
				$scope.items.$add({
					"name": newname,
					"done": false
				});
				$scope.name = '';
				$scope.modal.hide();
			}
		};

		$ionicModal.fromTemplateUrl('templates/tab-home-modal.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(modal) {
			$scope.modal = modal;
			$scope.modal.show();
		});
	})

	.controller('newsCtrl', function($scope, $http) {
		$scope.news = [];

		$http.get('http://demo6841327.mockable.io/get-noticias').then
		(function(resp) {
					$scope.news = resp.data;
				}, function(err) {
					console.error('Error', err);
				});

	})

	.controller('noticiaCtrl', function($scope, $stateParams, $http) {
		$scope.noticia = [];
		var noticias = [];

		$http.get('http://demo6841327.mockable.io/get-noticias').then
		(function(resp){
			noticias = resp.data;
			$scope.noticia = resp.data[$stateParams.noticiaId];
			}, function(err) {
				console.error('Erro', err);		
			});
	});






