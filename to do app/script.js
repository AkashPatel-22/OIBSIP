let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";
    todos.forEach((todo, index) => {
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center";
      li.innerHTML = `
        <span class="${todo.completed ? "completed" : ""}">${todo.text}</span>
        <div class="d-flex">
          <button onclick="toggleTodo(${index})" class="btn btn-sm ${todo.completed ? "btn-warning" : "btn-success"} me-2">
            ${todo.completed ? "Undo" : "Done"}
          </button>
          <button onclick="deleteTodo(${index})" class="btn btn-sm btn-danger">Delete</button>
        </div>
      `;
      todoList.appendChild(li);
    });
    saveTodos();
  }

function addTodo() {
  const input = document.getElementById("todo-input");
  const text = input.value.trim();
  if (text) {
    todos.push({ text, completed: false });
    input.value = "";
    renderTodos();
  }
}

function toggleTodo(index) {
  todos[index].completed = !todos[index].completed;
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

renderTodos();
