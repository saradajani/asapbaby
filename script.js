// call this function when "orange-kid" is clicked!
var blue = document.getElementById("blue");
var orange = document.getElementById("orange");

function moveGif(elem){
	document.getElementById("orange-kid").classList.add("fly-forward");
	orange.classList.add("opaque"); 
	blue.classList.remove("opaque");
	document.getElementById("blue-man").src = "images/vegeta0.png";
}

// call this function when "blue-man" is clicked!
function changePicture(elem){
	document.getElementById("blue-man").src = "images/vegeta1.png";
	orange.classList.remove("opaque"); 
	blue.classList.add("opaque");
	document.getElementById("orange-kid").classList.remove("fly-forward");
}

