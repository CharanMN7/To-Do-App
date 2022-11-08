// Header Section

var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menu-btn");
var menuClose = document.getElementById("menu-close");

var menuCheck = 0;
menuBtn.onclick = () => {
    if(menuCheck === 0){
        menu.className = "visible";
        menuCheck = 1;
    } else {
        menu.className = "hidden";
        menuCheck = 0;
    }
}

menuClose.onclick = () => {
    menu.className = "hidden";
}

// Main Section (Tasks)
// Adding Tasks
var newTask = document.getElementById("new-task");
var addNewTask = document.getElementById("add-new-task");
var tasks = document.getElementById("tasks");
var taskList = document.getElementsByClassName("task");

addNewTask.onclick = () => {
    if(newTask.value.trim() != ""){
        let n = taskList.length;
        tasks.innerHTML += `<div class="task" id="${"task-"+n}">
        <div class="task-text">${newTask.value}</div>
        <div>
            <img src="css/images/icons/check-line.svg" alt="" class="done-btn" onclick="taskDone(${n})">
            <img src="css/images/icons/x.svg" alt="" class="delete-btn" onclick="deleteTask(${n})">
            <img src="css/images/icons/star-line.svg" alt="" class="important-btn" onclick="markImportant(${n})">
        </div>
    </div>`;
        newTask.value = "";
    }
}

function taskDone(n){
    let task = document.getElementById("task-"+n);
    if(task.classList.contains("done")){
        task.classList.remove("done");
    } else {
        task.classList.add("done");
    }
}

function deleteTask(n) {
    let task = document.getElementById("task-"+n);
    task.remove();
}

function markImportant(n) {
    let task = document.getElementById("task-"+n);
    if(task.classList.contains("important")){
        task.classList.remove("important");
    } else {
        task.classList.add("important");
    }
}







