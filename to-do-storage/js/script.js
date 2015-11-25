// Structure
// ------------------------------------------------
var form = document.querySelector("form");
var tasks = document.querySelector(".tasks");
var date = document.querySelector(".date");
var entries = document.querySelector(".entries");
var ul = document.querySelector("ul");
var button = document.querySelector("button");



// setup
// ------------------------------------------------
var todo = {
	"items": []

};


// Events
// ------------------------------------------------
window.addEventListener("load", setPage);
button.addEventListener("click", createTask);


function setPage(event) {
	if (localStorage.getItem("todo") == null) {
		return;
	}
	else { 
	todo = JSON.parse(localStorage.getItem("todo"));
	todo.items.forEach(createTask);

}}

function enter(event) {
	event.preventDefault(event);
	
	var fullTask = {
		"name": input.value,
		"date": date.value,
		"done": false

	}

	todo.items.push(fullTask);
	createTask(fullTask);

	localStorage.setItem("todo", JSON.stringify(todo));
}




function createTask(event) {

	// var tasksValue = tasks.value;
	// var dateValue = date.value;

// create element
	var newTask = document.createElement("li");
	var checkbox = document.createElement("input");
	var text = document.createElement("span");

// decorate element
	// newTask.type = "checkbox";
	// newTask.textContent = tasksValue + dateValue;
	// newTask.innerHTML = '<input type="checkbox" class="boxes">' + " " + tasksValue + " " + dateValue;
	// newTask.className = "line";
// insert element
	checkbox.setAttribute("type", "checkbox");

	if (fullTask.done) {
	checkbox.setAttribute("checked", true);

}
	text.textContent = "fullTask.name" + " " + "fullTask.date" ;

	checkbox.addEventListener("click", taskClicked);

	ul.appendChild(newTask);
	newTask.appendChild(checkbox);
	newTask.appendChild(text);
}


function taskClicked(event) {

}
// boxes.addEventListener("click", strike);

// function strike(event) {
// 	li.className = "line";
// }
