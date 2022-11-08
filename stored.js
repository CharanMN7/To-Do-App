window.onload = () => {
    if(window.localStorage.length!==0){
        let tasks = document.getElementById("tasks");
        tasks.innerHTML = window.localStorage.getItem("saved");
    }
}

window.onunload = () => {
    let tasks = document.getElementById("tasks");
    window.localStorage.clear;
    window.localStorage.setItem("saved", tasks.innerHTML);
}