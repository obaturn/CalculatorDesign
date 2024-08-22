
const input = document.getElementById("taskInput");
const addButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");


function addTask() {
    if (input.value === "") {
        alert("Please enter a task.");
        return;
    }


    const listItem = document.createElement("li");


    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";


    const label = document.createElement("label");
    label.textContent = input.value;


    listItem.appendChild(checkbox);
    listItem.appendChild(label);


    taskList.appendChild(listItem);


    input.value = "";
}


addButton.addEventListener("click", addTask);


input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
