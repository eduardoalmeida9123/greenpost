app.factory('GetPostAPI',function($http,config){
	var _getPosts = function() {
		return $http.get(config.baseURL + '/server/greenpost/json.php')
	}
	return {
		getPosts: _getPosts
	};
})