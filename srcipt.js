var color1 = document.getElementsByTagName("input")[0];
var color2 = document.getElementsByTagName("input")[1];
var body = document.getElementById("body");
var css = document.querySelector("h3");

var bk = document.getElementById("body").css;
console.log(bk);

color1.value="#ff00ff";

function setGradient() {
	body.style.background = "linear-gradient(to right, " + 
	color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
