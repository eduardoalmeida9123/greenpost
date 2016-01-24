
app.controller('dashctrl',function($scope, $state,$ionicPopup,$location, $ionicLoading, $http, $cordovaCamera, SendPostAPI){

  // Alerts

  var alert_post = 'Obrigado, seu post foi publicado, verifique a outra aba para acompanhar o feed do nosso app!\nLembre-se se você deixou de escrever alguns dos campos, o post não será publicado !';
  var alert_sobre = 'Alunos: Eduardo Almeida, Marcos Glauber, Claudiana Santos, Italo Vinicius, Luan de Almeida Matheus Nascimento, Pedro feitosa, Felipe Farias, Jarélio Filho, Gabriel Bibiano\n\n - Conscientização através das denuncias feitas no aplicativo, pelos próprios usuários\n\n - Com as denuncias feitas pelo aplicativo GreenPost o quadro do descaso com o\n meio ambiente poderá ser melhorado e quem sabe solucionado !\n\n - ';

  	$scope.usuario = {};

      // Take Photo, cod externo
    $scope.takePicture = function() {
	    var options = {
	        quality : 100,
	        destinationType : Camera.DestinationType.DATA_URL,
	        sourceType : Camera.PictureSourceType.CAMERA,
	        allowEdit : false,
	        encodingType: Camera.EncodingType.JPEG,
	        targetWidth: 500,
	        targetHeight: 300,
	        popoverOptions: CameraPopoverOptions,
	        saveToPhotoAlbum: true
	    };

	    $cordovaCamera.getPicture(options).then(function(imageData) {
	        $scope.usuario.imagem = "data:image/jpeg;base64," + imageData;
	    }, function(err) {
	        
	    });
  	}
    

    // SendPost API Service
    $scope.enviar = function(usuario){
      $ionicLoading.show({template: 'Publicando ..'});
        SendPostAPI.sendPost(usuario).success(function(){
            $ionicLoading.hide();
            $scope.usuario.local = localStorage.rua;
            alert(alert_post);
            window.location.href = "index.html";
        })
    }
    
    $scope.usuario.local = localStorage.complete;

    console.log($scope.usuario.local);

  	// Butão Sobre
  	$scope.sobre = function() {
  	  alert(alert_sobre);
  	}

  	// Botão Anônimo
  	$scope.usuario.clay = false;
  	var bin = 0;
  	if (!$scope.usuario.clay) {
  		console.log(false);
  		console.log(bin);
  	};
  	$scope.click = function(scope){
  			if (!$scope.usuario.clay) {
  				console.log(true);
  				$scope.usuario.clay = true;
  				$scope.disable = true;
  				$scope.usuario.nome = "";
  				$scope.usuario.sobrenome = "";
  			}
  			else {
  				console.log(false);
  				$scope.usuario.clay = false;
  				$scope.disable = false;
  			};
  			if ($scope.usuario.clay) {
  				bin = 1;
  				console.log(bin);
  			}else{
  				bin = 0;
  				console.log(bin);
  			}
  	}
})
