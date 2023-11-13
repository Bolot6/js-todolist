const list = document.querySelector('#list');
const todos = [
    {
        id: 1,
        text: 'Take out rubbish',
        completed: true
    },
    {
        id: 2,
        text: 'Hit the gym',
        completed: false
    }
];

renderTodos();
function renderTodos() {
    list.innerHTML = `
    ${todos.map(todo => `
      <li>
        <input type="checkbox" ${todo.completed ? 'checked' : ''} />
        <span>${todo.text}</span>
      </li>`
    ).join('')}
  `;
}
function addItem() {
    const newItem = document.getElementById('input').value;
    if (newItem.trim() !== '') {
        const newTodo = {
            id: todos.length + 1,
            text: newItem,
            completed: false
        };
        todos.push(newTodo);
        renderTodos();
        document.getElementById('input').value = '';
    }
}



