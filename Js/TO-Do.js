const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


// function to add task:
function addTask() {
    const tasktext = taskInput.value.trim();
    if (tasktext === "") return;

    const li = document.createElement("li");
    li.innerHTML = `<span>${tasktext}</span>
                  <button onclick="doneTask(this)">Done</button>
                  <button onclick="editTask(this)">Edit</button>
                  <button onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";

}

// done:
function doneTask(button) {
    const task = button.parentElement;
    task.classList.toggle("completed");

}

// Edit:
function editTask(button) {
    prompt(`Enter your message`);
    const task = button.parentElement;



}

//  delete:
function deleteTask(button) {
    const task = button.parentElement;
    task.remove();
}