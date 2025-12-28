document.addEventListener("DOMContentLoaded", () => {
  const day = document.getElementById("weekday");
  const date = document.getElementById("date");
  const add_button = document.getElementById("add_btn");
  const todo_input = document.getElementById("todo_input");
  const todo_list_UL = document.getElementById("todo_list");

  // Adding Day as a name
  let today = new Date();
  day.textContent = today.toLocaleString("default", { weekday: "long" });

  const current_date = today.getDate();
  const month = today.toLocaleString("default", { month: "short" });
  const year = today.getFullYear();
  date.textContent = `${month} ${current_date}, ${year}`;

  let todos = JSON.parse(localStorage.getItem("todos_task")) || [];

  for (const todo of todos) {
    getData(todo);
  }

  add_button.addEventListener("click", () => {
    const text = todo_input.value.trim();
    if (text === "") return;
    const data = {
      id: Date.now(), // It will provide unique id
      text: text,
      complete: false,
    };

    todos.push(data);
    getData(data);
    todo_input.value = "";
    saveData();
    console.log(todos);
  });

  function getData(task) {
    console.log(task.text);

    const li = document.createElement("li");
    li.textContent = task.text;
    li.innerHTML = `<span>${li.textContent}</span>
    <input type="checkbox" id="todo_checkbox">
    `;
    todo_list_UL.appendChild(li);
  }

  function saveData() {
    localStorage.setItem("todos_task", JSON.stringify(todos));
  }
});
