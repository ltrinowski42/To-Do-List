//select elements
const form = document.getElementById("todoform")
const todoInput = document.getElementById("newtodo")

//variables
let todos = [];

//form submit
form.addEventListener('submit', function (event) {
    event.preventDefault()

    saveTodo();
})

//save todo
function saveTodo(){
    const todoValue = todoInput.value

    //check if the todo is empty
    const isEmpty = todoValue === '';

    //check for duplicate todos
    const isDuplicate =
    todos.some((todo) => todo.value === todoValue);

    if(isEmpty){
        alert("Todo's input is empty");
    } else if (isDuplicate){
        alert("Todo is duplicate");
    }
        else
        {
        const todo = {
            value : todoValue,
            checked :false,
            color : '#' + Math.floor(Math.random() * 16777215).toString(16),
         }
     
         todos.push(todo);
     
         console.log(todos);
     }
    }
