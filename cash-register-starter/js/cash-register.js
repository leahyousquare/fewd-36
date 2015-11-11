// Structure
// ------------------------------------------------
var form    = document.querySelector("form");
var input   = document.querySelector("input");
var entries = document.querySelector(".entries");
var total   = document.querySelector(".total");


// Setup
// ------------------------------------------------
var totalValue = 0;


// Events
// ------------------------------------------------
form.addEventListener("submit", enter);


function enter(event) {
	event.preventDefault(event)
	// stores on what is entered into the box
	var inputValue = parseInt(input.value);

	// stores new entry into a list element
	var newPrice = document.createElement("li");

	// the new enry is equal to $ plus what was entered in box
	newPrice.textContent = "$" + inputValue;

	// adds the newprice variable into the entries
	entries.appendChild(newPrice);

	// total value is equal to the previous total plus the new entry
	totalValue = totalValue + inputValue;
	
	// displays the total as the $ + what was entered in total value
	total.textContent = "$" + totalValue;

}
