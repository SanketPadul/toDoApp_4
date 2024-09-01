let toDoListLocal = localStorage.getItem("ToDoListStorageKeyItem");
console.log(toDoListLocal);
let toDoListItemDateLocal = localStorage.getItem("ToDoListStorageKeyDate");
console.log(toDoListItemDateLocal);
let toDoList = toDoListLocal ? JSON.parse(toDoListLocal) : [];
let toDoListItemDate = toDoListItemDateLocal
  ? JSON.parse(toDoListItemDateLocal)
  : [];
console.log(Array.isArray(toDoList));
console.log(Array.isArray(toDoListItemDate));

// displayList();

// let toDoList = [];
// let toDoListItemDate = [];

// This function add elements and date to todo list
function addElement() {
  let inputElement = document.querySelector("#inputTask");
  let task = inputElement.value;
  let inputDate = document.querySelector("#inputDate");
  let dateOfTask = inputDate.value;
  inputElement.value = "";
  inputDate.value = "";
  // calling displayList when new item is added
  if (task != "" && dateOfTask != "") {
    toDoList.push(task);
    toDoListItemDate.push(dateOfTask);
    localStorage.setItem("ToDoListStorageKeyItem", JSON.stringify(toDoList));
    localStorage.setItem(
      "ToDoListStorageKeyDate",
      JSON.stringify(toDoListItemDate)
    );
    displayList();
  } else alert("You need to add task and due Date");
}

// Display the todo list items
function displayList() {
  // fetching task which is Adding into TODO list
  let displayContainer = document.querySelector("#todo-list-container");
  let newHtml = "";
  for (let i = 0; i < toDoList.length; i++) {
    newHtml += `
          <span>${toDoList[i]}</span>
          <span>${toDoListItemDate[i]}</span>
          <button onclick="deleteItem(${i})" class="delete-button-color">Delete</button>
    `;
  }
  displayContainer.innerHTML = newHtml;
  // console.log(displayContainer);
}

// delete todo list item
function deleteItem(index) {
  toDoList.splice(index, 1);
  toDoListItemDate.splice(index, 1);
  localStorage.clear();
  localStorage.setItem("ToDoListStorageKeyItem", JSON.stringify(toDoList));
  localStorage.setItem(
    "ToDoListStorageKeyDate",
    JSON.stringify(toDoListItemDate)
  );
  displayList();
}
