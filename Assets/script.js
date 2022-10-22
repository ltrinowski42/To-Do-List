//select elements
const form = document.getElemebtById("todoform")
const todoInput = document.getElemebtById("newtodo")

//variables
let todos = [];

//form submit
form.addEventListener('submit', function (event) {
    event.preventDefault()

    saveTodo();
})

//save todo
function saveToDo(){
    const todoValue = todoInput.value

    const todo = {
       value : todoValue,
       checked :false,
       color : '#' + Math.floor(Math.random() * 16777215).toString(16),
    }

    todos.push(todo);

    console.log(todos);
}