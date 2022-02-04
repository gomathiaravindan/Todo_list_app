import React, { useState } from "react";
import "./todoform.css";

const TodoForm = ({ addTask }) => {
  const [inputval, setinputval] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputval) return;

    addTask(inputval);
    setinputval(" ");
  };
  return (
    <div className="todoform">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setinputval(e.target.value)}
          value={inputval}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default TodoForm;
