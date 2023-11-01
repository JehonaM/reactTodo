import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        autoComplete="off"
        value={name}
        className="rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus: focus:ring-inset focus:ring-sky-300 sm:text-sm sm:leading-6"
        onChange={handleChange}
      ></input>
      <button
        type="submit"
        class="ml-3 rounded-lg bg-black p-3 px-5 text-white hover:bg-black-400 focus:outline-none"
      >
        Add
      </button>
    </form>
  );
}

export default Form;
