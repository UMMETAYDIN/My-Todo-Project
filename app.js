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
}



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


function createListElement(newTodo){
const li=document.createElement ("li");// li elementi oluşturduk
li.setAttribute("id", id);
completed&&li.classList.add("checked");


const okIcon= document.createElement("i");//li elemneti içerisindeki  icon oluştu en soldaki
okIcon.setAttribute("class", "fas fa-check");
li.appendChild("okIcon" );


const p = document.createElement ("p"); //li elemneti içerisindeki  text oluştu ortadaki
const pTextNode=document.createTextNode(text);
p.appendChild(pTextNode);
li.appendChild(p);

const deleteIcon=document.createElement("i"); //li elemneti içerisindeki  icon oluştu en sagdaki
deleteIcon.setAttribute("class", "fas da-trash");
li.appendChild(deleteIcon);

todoUl.appendChild(li);// ul nin cocugu olan li yi  ul nin içine aldık

}

todoUl.addEventListener("click", (e)=>{
   const id= e.target.parentElement.getAttribute("id");

   if(e.target.classList.contains("fa-trash")){  // sayfalardaki köşedeki x işaretine basıp sayfayı kapatmak istedigimizde de aynısını yaparız
    e.target.parentElement.remove();// sileriz
    todos= todos.filter((todo)=>todo.id !==Number(id));
    localStorage.setItem("TODOS", JSON.stringify(todos));
    }else if(e.target.classList.contains("fa-check")){
        e.target.parentElement.classList.toggle("checked");
        todos.map((todo, index)=>{
            if(todo.id==id){
                todos[index].completed=!todos[index].completed
                
            }

        })
    }


});
