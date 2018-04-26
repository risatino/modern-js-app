// @TODO: Uncomment the following file and complete the code  //
//        according to the instructions in README.md.

var todos = [
  {
    complete: false,
    text: "Learn JavaScript"
  },
  {
    complete: false,
    text: "Learn JavaScript Charting"
  },
  {
    complete: false,
    text: "Make Awesome Front-End Projects"
  }
];

function renderTodos() {

// 1. Get a reference to the element in the DOM with an id of todo-list using document.querySelector
  var todoList = document.querySelector("#todo-list");
 
  // 2. Using a for-loop, go through each element in the todos array and build a string containing an `li` element for each element in the todos array with the todo's text inside
  for (var i = 0; i < todos.length; i++) {
    var todoListItem = document.createElement("li");
    var todo = todos[i];
    // 3. Using the innerHTML method, set the innerHTML of the todo-list element to the string created in the previous step
    todoListItem.innerHTML = todo.text;
    todoList.appendChild(todoListItem);
  }
 
}

// running the renderTodos function once the page loads
renderTodos();
