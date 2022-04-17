(function(window) {
	var say = "Good Bye";
	var bye = function (name) {
  		console.log(say + " " + name);
	}
	
	window.bye = bye;

})(window);