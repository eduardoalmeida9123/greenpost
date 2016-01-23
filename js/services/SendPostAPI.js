app.factory('SendPostAPI', function($http,config) {
	var _sendPost = function(usuario){
		return $http.post(config.baseURL + '/server/greenpost/insert_a.php', usuario);
	}
	return {
		sendPost: _sendPost
	};
})