//SELECTORS

const todoInput= document.getElementById("todo-input");
const addBtn=document.getElementById("todo-button");
const todoUl= document.getElementById("todo-ul");

// todos dizisini LocalStorage deki veriler 
let todos =JSON.parse(localStorage.getItem("TODOS")) || []
console.log(todos)

const renderSavedTodos=()=>{
    todos.forEach((todo)=>{
        createListElement(todo)
    })
})



//buton click oldugunda ne olsun?
addBtn.addEventListener("click", ()=>{
    if(todoInput.value.trim()===""){ // inputun içine deger girilmediyse aleert ver
        alert("Please enter new todo")
    }else{                                  //deger girerse
const newTodo= {
    id:new Date().getTime(),
    completed:false,
    text:todoInput.value,
};
//yeni  bir li elementi oluşturup DOM a bas
createListElement(newTodo);

//yeni oluşturulan TODO yu diziye sakla
    todos.push(newTodo);
    localStorage.setItem("TODOS", JSON.stringify(todos));
    console.log(todos);
    todoInput.value="";

    }
})
//lokal storage  gönderilen veriler saklanır session storage' dekiler silinir
function