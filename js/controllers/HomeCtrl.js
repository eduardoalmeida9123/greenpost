app.controller('homectrl',function($scope, $state,$ionicPopup, $ionicLoading, $http, $q,$filter, $stateParams, GetPostAPI){

      $ionicLoading.show({
        template: 'Carregando'
      });

      GetPostAPI.getPosts().success(function(data) {
            $scope.dados = data;
            $ionicLoading.hide();
      })

      // PROVIDER
      //GetPostAPI2.Get().success(function(data){
            //$scope.dados = data;
            //$ionicLoading.hide();
      //})

      
})