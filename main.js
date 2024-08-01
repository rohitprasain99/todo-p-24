
const addBtn = document.getElementById('add-btn')
const delBtn = document.getElementById('del-btn')
const todos = document.getElementById('todos')
const addField = document.getElementById('add-field')


let todosList = [
    {
        id: 0,
        title: "first title"
    },
    {
        id: 1,
        title: "second title"
    }
]

function deleteTodo(id) {
    const todoIdx = todosList.indexOf(todosList.filter((todo, idx) => todo.id === id)[0])
    todosList.splice(todoIdx, 1)
    showTodos()
}


function showTodos() {
    todos.innerHTML = todosList.map((todo) => `
    <div id="card" >
        <div id="card-title">${todo.title}</div>
        <button id="del-btn" onClick=deleteTodo(${todo.id})>Delete</button>
    </div>
    `)
}



showTodos()

addBtn.addEventListener('click', () => {

    todosList.push({
        id: todosList.length,
        title: addField.value
    })

    showTodos()
})

