import React, { useState } from "react";
import "./todoform.css";

const TodoForm = ({ addTask }) => {
  const [inputval, setinputval] = useState([
    {
      task: null,
      date: null
    }
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputval.task && !inputval.date) return;

    addTask(inputval.task, inputval.date);
    setinputval({
      task: "",
      date: ""
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!name) return;
    setinputval({
      ...inputval,
      [name]: value
    });
  };

  return (
    <div className="todoform">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={inputval.task}
          name="task"
        />
        <input
          type="date"
          onChange={handleChange}
          value={inputval.date}
          name="date"
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default TodoForm;
