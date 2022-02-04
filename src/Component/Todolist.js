import React from "react";
import Todo from "./Todo";
import "./todolist.css";

const Todolist = ({ todolist, handlecomplete, handlefilter, handleedit }) => {
  return (
    <div className="todolist">
      {todolist.map((todo, index) => {
        return (
          <Todo
            key={index}
            todo={todo}
            handlecomplete={handlecomplete}
            handlefilter={handlefilter}
            handleedit={handleedit}
          />
        );
      })}
      <button type="button" onClick={handlefilter}>
        Delete Task
      </button>
    </div>
  );
};

export default Todolist;
