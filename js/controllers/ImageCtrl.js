app.controller('ImageCtrl', function($scope, $stateParams, $filter, GetPostAPI) {
	$scope.id = $stateParams.id;

	var myfilter = $filter;
	GetPostAPI.getPosts().success(function(data){
		$scope.dados = myfilter('filter')(data, {
			id:$stateParams.id
		})
	});
});