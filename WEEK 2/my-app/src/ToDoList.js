//import logo from './logo.svg';
//import './App.css';

import Todo from "./todo";

function ToDoList(props) {
    console.log(props.todos)
  return (
    
    <div className="todoapp stack-large">
      <h1>To Do List</h1>

      <ul className="todo-list stack-large stack exception" aria-labelledby="list-heading">
        {props.todos.map((todo, index) => {
          console.log(todo)
            return (
              <Todo todo={todo} index={index} />
            )
            })}

        {/* <li className="todo stack-small">
          <div className="checkItem">
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label className="todo-label" htmlFor="todo-0"> Wake Up </label>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="checkItem">
            <input id="todo-1" type="checkbox"/>
            <label className="todo-label" htmlFor="todo-1"> Shower and get ready</label>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="checkItem">
            <input id="todo-2" type="checkbox"/>
            <label className="todo-label" htmlFor="todo-2"> Eat Breakfast </label>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="checkItem">
            <input id="todo-2" type="checkbox"/>
            <label className="todo-label" htmlFor="todo-2"> Go to Work </label>
          </div>
        </li> */}
      </ul>
    </div>

  );
}

export default ToDoList;
