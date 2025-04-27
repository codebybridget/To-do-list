// Selectors
const todoIn = document.querySelector(".todo-input");
const submit = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

// Event Listeners
submit.addEventListener("click", addTodo);
todoList.addEventListener("click", handleListClick);

// Add To-Do Function
function addTodo(e) {
  e.preventDefault();

  const inputValue = todoIn.value.trim();
  if (inputValue === "") return;

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const todoLi = document.createElement("li");
  todoLi.innerText = inputValue;
  todoLi.classList.add("todo-item");
  todoDiv.appendChild(todoLi);

  const completedButton = document.createElement("button");
  completedButton.innerHTML = "✅";
  completedButton.classList.add("complete--btn");
  todoDiv.appendChild(completedButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = "❌";
  trashButton.classList.add("delete--btn");
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);
  todoIn.value = "";
}

function handleListClick(e) {
  const item = e.target;

  if (item.classList.contains("delete--btn")) {
    item.parentElement.remove();
  }

  if (item.classList.contains("complete--btn")) {
    item.parentElement.classList.toggle("completed");
  }
}