app.provider("GetPostAPI2", function(config){
	this.$get = function($http, $ionicLoading){
		var _Get = function(){
			return $http.get(config.baseURL + '/server/greenpost/json.php')
			
		}
		return {
			Get: _Get
		};
	};
});