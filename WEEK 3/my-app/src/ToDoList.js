//import Todo list
import Todo from "./todo";

function ToDoList(props) {
    console.log(props.todos)
  return (
    
    <div className="todoapp stack-large">
      <h1>To Do List</h1>

      <ul className="todo-list stack-large stack exception" aria-labelledby="list-heading">
        {props.todos.map((todo) => {
          console.log(todo)
            return (
              <Todo todo={todo} key= {todo.id} deleteTodo= {props.deleteTodo} complete= {props.complete}/>
            )
            })}

        
      </ul>
    </div>

  );
}

export default ToDoList;