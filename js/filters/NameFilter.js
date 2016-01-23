app.filter('name',function() {
	return function (input) {
		var Nome = input.split(" ");
		console.log(Nome);
		return input;
	}
})