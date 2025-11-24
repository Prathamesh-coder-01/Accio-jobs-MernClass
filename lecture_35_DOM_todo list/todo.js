const addBtn = document.querySelector("#add-btn");
const todoItemsSection = document.querySelector("#todo-items");

addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const todo = document.querySelector("#todo").value;

    if (todo.trim() === "") return;

    const todoItem = document.createElement("div");
    todoItem.className = "todo-item";

    todoItem.innerHTML = `
        <p class="todo-text">${todo}</p>
        <div class="todo-buttons">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    todoItemsSection.appendChild(todoItem);

    const todoText = todoItem.querySelector(".todo-text");
    const editBtn = todoItem.querySelector(".edit-btn");
    const deleteBtn = todoItem.querySelector(".delete-btn");

    // Delete
    deleteBtn.onclick = () => todoItem.remove();

    // add 
    editBtn.onclick = () => {
        let newText = prompt("Edit your todo :", todoText.innerText);
        if (newText !== null && newText.trim() !== "") {
            todoText.innerText = newText;
        }
    };

    document.querySelector("#todo").value = "";
});
