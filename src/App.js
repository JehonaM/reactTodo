import React, { useState } from "react";
import Form from "./components/Form";
import { nanoid } from "nanoid";

import "./App.css";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  const taskList = tasks.map((task) => (
    <li className="list-none">{task.name}</li>
  ));
  return (
    <div className="flex text-center bg-purple-200 h-screen flex-col pt-40 mb-5">
      <h1 className="font-bold text-slate-100 text-2xl mb-5">My todo list</h1>
      <Form className="mb-5" addTask={addTask} />
      <div>{taskList}</div>
    </div>
  );
}

export default App;
