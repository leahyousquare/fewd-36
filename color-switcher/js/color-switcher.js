// Structure
// -------------------------------------
// var color1 = document.querySelector(".olive");
// var color2 = document.querySelector(".skyblue");
// var color3 = document.querySelector(".salmon");
// var color4 = document.querySelector(".burlywood");
// var color5 = document.querySelector(".thistle");
var allColors = document.querySelector("ul");

// Events
// -------------------------------------
// color1.addEventListener("click", changeColor);
// color2.addEventListener("click", changeColor);
// color3.addEventListener("click", changeColor);
// color4.addEventListener("click", changeColor);
// color5.addEventListener("click", changeColor);


// setup
// -------------------------------------
var theme = {
	'color': 'white'
};

allColors.addEventListener("click", handleClick);
window.addEventListener("load", pageLoad);

// Event handler functions
// -------------------------------------

// getting data from page
function handleClick(event) {
	if (event.target.tagName  == "UL") {
		return;
	}

	var swatch = event.target;
	var swatcbColor = swatch.getAttribute("class");

	//1. update data model
	theme.color = swatchColor;

	//2. call function to update page
	changeColor(theme);

	//3. save data object to local storage
	localStorage.setItem('theme', JSON.stringify(theme));
}

// get theme object from local storage
function pageLoad(event) {

	if (localStorage.getItem('theme') == null) {
		changeColor(theme);
	} else {

	theme = JSON.parse(localStorage.getItem('theme'));
	console.log(theme);

	changeColor(theme);
}}


// updates the page
function changeColor(theme) {
	var body = document.querySelector("body");
	// body.className = theme.color;

	var name = document.querySelector("span");
	// name.textContent = theme.color;
}


var theme = {
	color: "thistle"

}

var themeString = JSON.stringify(theme);
var theme = JSON.parse(localStorage.getItem("theme"));
var task = {
	name: "exercise",
	date: undefined,
	completed: false,

}