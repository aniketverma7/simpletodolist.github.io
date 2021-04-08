const todoInput=document.querySelector(".text");
const todoButton =document.querySelector(".todoBtn");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click",addtodo);
todoList.addEventListener("click",deleteCheck);
function addtodo(event){
    event.preventDefault();
    if(todoInput.value==""){
        alert("Empty input field not allowed!");
        return;
    }
    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo=document.createElement("li");
    newTodo.innerText=todoInput.value;
    newTodo.classList.add("todo-item");
    todoInput.value="";

    todoDiv.appendChild(newTodo);

    const completedButton=document.createElement("button");
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton=document.createElement("button");
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
}

function deleteCheck(e){
    const item=e.target;
    if(item.classList[0]=="trash-btn"){
        item.parentElement.remove();
    }

    if(item.classList[0]=="complete-btn"){
        item.parentElement.classList.toggle("completed");
    }
}