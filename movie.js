var form = document.querySelector("form");
var input = document.querySelector(".query");
var ul = document.querySelector(".results");

form.addEventListener("submit", getMovies);


function getMovies(e) {
	e.preventDefault();

	 var search = input.value;
	 var url = "http://www.omdbapi.com/?s=" + search;

	 // makes ajax request
	 jQuery.getJSON(url, updateMovies);


}


function updateMovies(json) {
	console.log("updateMovies");
	console.log(json);
	window.results = json;

	// reset the page
	ul.innerHTML = "";

	var movies = json["Search"];

	movies.forEach(createMovieItem);


}

function createMovieItem(movie) {
	var li = document.createElement("li");
	li.textContent = movie["Title"];
	ul.appendChild(li);
}