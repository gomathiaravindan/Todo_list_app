import "./styles.css";
import React, { useState } from "react";
import Todolist from "./Component/Todolist";
import TodoForm from "./Component/TodoForm";
import Bg from "./gold1.png";

export default function App() {
  const [todolist, settodolist] = useState([
    {
      id: 1,
      work: "Study React",
      isdone: false
    },
    {
      id: 2,
      work: "Write a blog",
      isdone: false
    },
    {
      id: 3,
      work: "Read novels",
      isdone: false
    }
  ]);

  const addTask = (userInput) => {
    let copy = [...todolist];
    copy = [
      ...copy,
      { id: todolist.length + 1, work: userInput, isdone: false }
    ];
    settodolist(copy);
  };

  const handlecomplete = (id) => {
    let mapped = todolist.map((work) => {
      return work.id === Number(id)
        ? { ...work, isdone: !work.isdone }
        : { ...work };
    });
    settodolist(mapped);
  };
  const handlefilter = () => {
    let filtered = todolist.filter((work) => {
      return !work.isdone;
    });
    settodolist(filtered);
  };

  const handleedit = (text, id) => {
    let update = todolist.map((work) => {
      return work.id === Number(id) ? { ...work, work: text } : { ...work };
    });
    settodolist(update);
  };
  return (
    <div className="container">
      <div className="App" style={{ backgroundImage: `url(${Bg})` }}>
        <h1>My Todo App</h1>
        <TodoForm addTask={addTask} />
        <Todolist
          todolist={todolist}
          handlecomplete={handlecomplete}
          handlefilter={handlefilter}
          handleedit={handleedit}
        />
      </div>
    </div>
  );
}
