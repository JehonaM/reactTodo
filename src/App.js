import React, { useState } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";
import { nanoid } from "nanoid";

import './App.css';


function App(props) {
  
  const [tasks, setTasks] = useState(props.tasks);
  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
    console.log(newTask);
    console.log(tasks)
  }
  console.log(props.tasks);

  const taskList = tasks.map((task) => (
    <li>
      {task.name}
    
    </li>
  ));
  return (
    <div>
        <h1>My todo list</h1>
        <Form addTask={addTask}/>
     
       <div>{taskList}</div> 

    </div>
  );
}

export default App;
