// Structure
// ------------------------------------------------
var form    = document.querySelector("form");
var input   = document.querySelector("input");
var entries = document.querySelector(".entries");
var total   = document.querySelector(".total");


// Setup
// ------------------------------------------------
var totalValue = 0;

var receipt = {
	"items": []
}

// Events
// ------------------------------------------------
form.addEventListener("submit", enter);
window.addEventListener("load", pageLoad);


function pageLoad(event) {

	if (localStorage.getItem('receipt') == null) {
		receipt.items.forEach(createItem);

	} else {

	receipt = JSON.parse(localStorage.getItem("receipt"));
	receipt.items.forEach(createItem)}
}

function enter(event) {
	event.preventDefault(event)
	// stores on what is entered into the box
	var inputValue = parseFloat(input.value);

	receipt.items.push(inputValue);

	localStorage.setItem('receipt', JSON.stringify(receipt));
	createItem(inputValue);

}

function createItem(amount) {
	// stores new entry into a list element
	var newPrice = document.createElement("li");
	// adds the newprice variable into the entries
	entries.appendChild(newPrice);

	// the new enry is equal to $ plus what was entered in box
	newPrice.textContent = formatCurrency(amount);
	
	// displays the total as the $ + what was entered in total value
	total.textContent = formatCurrency(totalValue);

	// total value is equal to the previous total plus the new entry
	totalValue = totalValue + amount;

	input.value ="";

}


function formatCurrency(number){
	var currency = parseFloat(number);
	currency = currency.toFixed(2);
	currency = "$" + currency;
	return currency;

}
