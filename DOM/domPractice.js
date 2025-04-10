const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const tasks = document.querySelector(".tasks");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const userData = input.value;
    // if (!userData) {
    //     alert("enter some value");
    //     return;
    // }

    const task = document.createElement("div");
    task.classList.add(".task");
    const content = document.createElement("div");
    content.classList.add(".content");

    const task_input = document.createElement("input");
    task_input.classList.add("text");
    task_input.classList.add("form-control");
    task_input.classList.add("my-3");
    task_input.type = "text";
    task_input.value = userData;
    task_input.setAttribute("readonly", "readonly");


    content.appendChild(task_input);
    task.appendChild(content);
    tasks.appendChild(task);


    const action = document.createElement("div");
    action.classList.add(".action")

    const task_edit = document.createElement("button");
    task_edit.classList.add("edit");
    task_edit.classList.add("btn");
    task_edit.classList.add("btn-success");
    task_edit.classList.add("mx-3");
    task_edit.innerHTML = "edit"

    const task_delete = document.createElement("button");
    task_delete.classList.add("delete");
    task_delete.classList.add("btn");
    task_delete.classList.add("btn-danger");
    task_delete.classList.add("mx-3");
    task_delete.innerHTML = "delete"

    action.appendChild(task_edit);
    action.appendChild(task_delete);
    task.appendChild(action);

    input.value = "";

    task_edit.addEventListener("click", (e) => {
        e.preventDefault();

        if (task_edit.innerHTML == "edit") {

            task_input.removeAttribute("readonly");
            task_edit.innerHTML = "save";
            task_input.focus();
            // alert('task saved ');
        
        }else
        {    
            task_input.setAttribute("readonly", "readonly");
            task_edit.innerHTML = "edit";
        }

        
    })
     task_delete.addEventListener("click",(e) =>
                {
                e.preventDefault();

                task.remove(".content");
                task.remove(".actions")

             })



})