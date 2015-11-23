// Structure
// ------------------------------------------------
var form = document.querySelector("form");
var tasks = document.querySelector(".tasks");
var date = document.querySelector(".date");
var entries = document.querySelector(".entries");
var ul = document.querySelector("ul");
var button = document.querySelector("button")

// Events
// ------------------------------------------------
button.addEventListener("click", addTask);


function addTask(event) {
	event.preventDefault(event);

	var tasksValue = tasks.value;
	var dateValue = date.value;

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
	text.textContent = " " + tasksValue + " " + dateValue;

	ul.appendChild(newTask);
	newTask.appendChild(checkbox);
	newTask.appendChild(text);
}

// boxes.addEventListener("click", strike);

// function strike(event) {
// 	li.className = "line";
// }
