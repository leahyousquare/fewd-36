// Structure
// ------------------------------------------------
var form = document.querySelector("form");
var tasks = document.querySelector(".tasks");
var date = document.querySelector(".date");
var entries = document.querySelector(".entries");
var ul = document.querySelector("ul");
var button = document.querySelector("button");


// Events
// ------------------------------------------------
button.addEventListener("submit", addTask);

function addTask(event) {
	event.preventDefault(event);

	var tasksValue = tasks.value;
	var dateValue = date.value;

// create element
	var span = document.createElement("span");
	var box = document.createElement("input");
	var li = document.createElement("li");


// decorate element
	// newTask.type = "checkbox";
	// newTask.textContent = tasksValue + dateValue;
	box.type = ("checkbox");
	li.textContent = tasksValue + " " + dateValue;
	box.className = "boxes";

// box.addEventListener("click", )

// insert element
	ul.appendChild(span)
	li.appendChild(box);
	span.appendChild(li);

}
// 	li.appendChild(box);
// 	box.appendChild(span);
// }