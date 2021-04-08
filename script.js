const todoInput=document.querySelector(".text");
const todoButton =document.querySelector(".todoBtn");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click",addtodo);
todoList.addEventListener("click",deleteCheck);
document.addEventListener('DOMContentLoaded',getTodos);


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
    
    savetodos(todoInput.value);

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
    todoInput.value="";
}

function deleteCheck(e){
    const item=e.target;
    if(item.classList[0]=="trash-btn"){
        item.parentElement.remove();
        removeTodo(item.parentElement);
    }

    if(item.classList[0]=="complete-btn"){
        item.parentElement.classList.toggle("completed");
    }
}

function savetodos(todo){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function getTodos(){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach((todo)=> {
        const todoDiv=document.createElement("div");
        todoDiv.classList.add("todo");

        const newTodo=document.createElement("li");
        newTodo.innerText=todo;
        newTodo.classList.add("todo-item");

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
    });
}

function removeTodo(todo){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    let todoIndex=todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem("todos",JSON.stringify(todos));
}
