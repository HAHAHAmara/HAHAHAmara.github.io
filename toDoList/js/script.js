document.addEventListener('DOMContentLoaded' , ()=>{
    document.querySelector('#addBtn').onclick = newElement;
    let myNodelist = document.querySelectorAll("#myUL li");
    myNodelist.forEach(item => {
        updateListItem(item);
    });
})

function updateListItem(item) {
    let span = document.createElement('span');
    let txt = document.createTextNode('\u00D7');
    span.className = "close";
    span.onclick = function () {
        this.parentElement.style.display = "none";
    }
    span.appendChild(txt);
    item.appendChild(span);
    item.onclick = function (){
        this.classList.toggle("checked");
    }
}
document.querySelector('#error').onclick = error0ff;
function errorOn() {
    document.querySelector("#error").style.display = "flex";
}

function errorOff() {
    document.querySelector("#error").style.display = none;
}
function newElement () {
    let inputValue = document.querySelector("#myInput").value;

    if (inputValue.length > 0) {
        let li = document.createElement("li");
        li.innerHTML = inputValue;
        document.querySelector("#myUL").appendChild(li);
        document.querySelector("#myInput").value = "";
        updateListItem(li);
    }
    else {
        errorOn();
    }
}
let todos = [];
class Todo {
    constructor(name) {
        this.name = name;
        this.completed = false;
    }
}

function addNewTodo(name) {
    let t = new Todo(name);
    todos.push(t);
}

function newElement(){
    let myInput = document.querySelector("#myInput").value;
    if (myInput.lenght > 0) {
        addNewTodo(myInput);
        saveTodos();
    }
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
    if (!todos) todos = [];
    todos.forEach(item => {
        let name = item.name;
        let completed = item.completed;
        let li = createListItem(name);
        updatelist(li);
        if (completed) li.classList = "checked";
    })
}

getTodos();

span.onclick = function () {
    this.parentElement.style.display = "none";
    let index = todos.findIndex (v => v.name === listItem.childNodes [0].textContent);
    todos.splice(index, 1);
    saveTodos();
}

listItem.onclick = function () {
    this.classList.toggle("checked");

    let item = todos.find(v => v.name ===(this.childNodes[0].textContent));
    if (item.completed === true) item.completed = false;
    else item.completed = true;
    saveTodos();
};