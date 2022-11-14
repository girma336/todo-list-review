const saveTodo = (newTodo) => {
  let todoList = [];
  if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
  }
  todoList.push(newTodo);
  localStorage.setItem('todo', JSON.stringify(todoList));
  window.location.reload();
};

export default saveTodo;
