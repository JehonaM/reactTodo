import React from "react";

function Todo(props){

    <li>
    {/* <div className="c-cb">
    <input id={props.id} type="checkbox" defaultChecked={props.completed} value={props.name}/>
    <label className="todo-label" htmlFor={props.id}>
        {props.name}
    </label>
    </div>
    <div className="btn-group">
      <button type="button" className="btn">
        Edit <span className="visually-hidden">{props.name}</span>
      </button>
      <button type="button" className="btn btn__danger">
        Delete <span className="visually-hidden">{props.name}</span>
      </button>
    </div> */}
    {props.name}
  </li>
}

export default Todo;