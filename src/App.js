import TodoList from "./todo/todolist";



function App() {

  let arr = [
    { id: 1, completed: true, title: "купить хлеб" },
    { id: 2, completed: false, title: "купить булку" },
    { id: 3, completed: false, title: "помыть руки" },


  ]


  function toggleTodo(id) {
    arr = arr.map(todo=> {
      if (todo.completed) {
        todo.completed = !todo.completed
      }
      return todo
    })
  }

  return (
    <div className="wrapper">
      <h1>React tutorial</h1>
      <TodoList todos = {arr} onToggle = {toggleTodo}/>
    </div>

  );
}

export default App;
