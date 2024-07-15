const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = todoInput.value.trim();
    if (task !== '') {
        addTask(task);
        todoInput.value = '';
    }
});

function addTask(task) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = task;
    span.addEventListener('click', toggleCompleted);
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', removeTask);
    li.appendChild(span);
    li.appendChild(removeBtn);
    todoList.appendChild(li);
}

function toggleCompleted() {
    this.classList.toggle('completed');
}

function removeTask() {
    this.parentNode.remove();
}