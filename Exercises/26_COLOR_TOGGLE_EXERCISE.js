var button = document.querySelector("button");
var purpleBackground = false;

button.addEventListener("click", function() {
	if(purpleBackground === true) {
		document.body.style.background = "white";
		purpleBackground = false;
	} else {
		document.body.style.background = "purple";
		purpleBackground = true;
	}

});
