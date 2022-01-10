const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function deleteTodo(event)
{
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));//뒤에건 문자임
    saveToDo();
}

function saveToDo()
{
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function painToDo(newTodo)
{
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);//li안에 span넣기
    li.appendChild(button);
    toDoList.appendChild(li);
}
function handelToDoSubmit(event)
{
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    painToDo(newTodoObj);
    saveToDo();
}
toDoForm.addEventListener("submit", handelToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);
 
if (savedToDos !== null)
{
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    //각각 함수 넣는 것이 가능함
    //parsedToDos.forEach(함수이름)//모든 인수를 함수적용시킴
    //=parsedToDos.forEach((item) => console.log("sdasd",item))
    parsedToDos.forEach(painToDo);
}
