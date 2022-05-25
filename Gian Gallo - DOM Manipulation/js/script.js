var button = document.getElementById("add");
var input = document.getElementById("inputitem");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

//create
function createListElement() {
var li = document.createElement("li");
li.appendChild(document.createTextNode(input.value));
ul.appendChild(li);
var button = document.createElement("button");

//remove
button.appendChild(document.createTextNode("Remove"));
li.appendChild(button);
input.value = "";
}



function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function crossIfDone(event) {
	 if(event.target && event.target.nodeName === "LI") {
		  event.target.classList.toggle("done");
	 }
}

function deleteItem(event) {
        if(event.target && event.target.tagName === "BUTTON") {
			  return event.target.parentElement.remove();
        }
}



//EventListener
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", crossIfDone);
ul.addEventListener("click", deleteItem);

