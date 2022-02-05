import React from "react";
import Todo from "./Todo";
import "./todolist.css";

const Todolist = ({
  todolist,
  handlecomplete,
  handlefilter,
  handleedit,
  handleDate
}) => {
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
            handleDate={handleDate}
          />
        );
      })}
      <button type="button" onClick={handlefilter}>
        Delete Completed Task
      </button>
    </div>
  );
};

export default Todolist;
