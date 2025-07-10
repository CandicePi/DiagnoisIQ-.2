let todos = []

function generatedId(){
    return Math.floor(Math.random()*10000000)
}

function add_todo(todo) {
    todos.push(todo)
}


function remove_todo(todo_id) {
    todos = todos.filter((e,i) => {
        return todo_id != e.id
    })
}


document.getElementById('btn').addEventListener('click', () => {
    add_todo({ id: generatedId(), content: document.getElementById('inp').value})
const list = document.getElementById('todos-list')
list.innerHTML = ''
todos.forEach((todo) => {
    const div = document.createElement('div')
    const li = document.createElement('li')
    const img = document.createElement('img')
    img.src = 'https://img.icons8.com/ios11/512/FFFFFF/delete.png'
    img.alt = todo.id
    li.textContent = todo.content
    img.classList.add('bin')
    div.appendChild(li)
    div.appendChild(img)
    list.appendChild(div)
})
document.getElementById('inp').value = ''

})

document.getElementById('todo-list').addEventListener('click',(e) => {

    if(e.target.tagName == 'IMG'){
      const id = e.target.getAttribute('alt')
      remove_todo(id)
      const list = document.getElementById('todos-list')
      list.innerHTML = ''
      todos.forEach((todo) => {
      const div = document.createElement('div')
      const li = document.createElement('li')
      const img = document.createElement('img')
      img.src ="https://img.icons8.com/ios11/512/FFFFFF/delete.png"
      img.alt =todo.id
      li.textContent = todo.content
      img.classList.add('bin')
      div.appendChild(li)
      div.appendChild(img)
      list.appendChild(div)
    })
    }

console.log(todos);

})