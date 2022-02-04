import React, { useState } from "react";
import "./todo.css";

const Todo = ({ todo, handlecomplete, handleedit }) => {
  const [disable, setdisable] = useState(false);

  const handleclick = (e) => {
    e.preventDefault();
    setdisable(true);
    handlecomplete(e.currentTarget.id);
  };

  return (
    <div className="todo-container">
      <p style={{ opacity: todo.isdone ? "0.5" : "" }}>
        <input
          type="radio"
          className="todo"
          id={todo.id}
          key={todo.id + todo.work}
          value={todo.id}
          onChange={handleclick}
          disabled={disable}
        />{" "}
        <input
          type="text"
          value={todo.work}
          onChange={(e) => {
            handleedit(e.target.value, todo.id);
          }}
          disabled={disable}
        />
      </p>
    </div>
  );
};

export default Todo;
