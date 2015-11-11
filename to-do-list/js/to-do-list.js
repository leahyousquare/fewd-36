// Structure
// ------------------------------------------------
var form = document.querySelector("form");
var tasks = document.querySelector(".tasks");
var date = document.querySelector(".date");
var entries = document.querySelector(".entries");
var ul = document.querySelector("ul");

// Events
// ------------------------------------------------
form.addEventListener("submit", addTask);


function addTask(event) {
	event.preventDefault(event);

	var tasksValue = tasks.value;
	var dateValue = date.value;

// create element
	var newTask = document.createElement("li");

// decorate element
	// newTask.type = "checkbox";
	// newTask.textContent = tasksValue + dateValue;
	newTask.innerHTML = '<input type="checkbox" class="boxes">' + " " + tasksValue + " " + dateValue;
	newTask.className = "line";
// insert element
	ul.appendChild(newTask);
}

// boxes.addEventListener("click", strike);

// function strike(event) {
// 	li.className = "line";
// }
