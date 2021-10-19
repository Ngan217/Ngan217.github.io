import React, { useEffect, useState } from 'react';
import data from "./data.json";
import {Header} from "./Header";
import {ToDoList, counter, setCounter} from "./ToDoList";
import {ToDoForm} from "./ToDoForm";


export function App() {
  const [ toDoList, setToDoList ] = useState(data);
  const [counter, setCounter] = useState(toDoList.length)
  
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
    setCounter(toDoList.length);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete
    });
    setToDoList(filtered);
    setCounter(toDoList.length);
  }

  const addTask = (userInput1,userInput2 ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput1, deadline: userInput2 , complete: false }];
    setToDoList(copy);
    setCounter(counter+1);
  }

  const clickButton = () => {
    setCounter(toDoList.length)
  }

  return (
    <div className="App">
      <Header />
      <div id = "count">
        {counter} Tasks Remaining  
        <button id ="refesh" onClick = {clickButton} >Refesh</button>
      </div>
      <body>
      <div className = "Body">
        <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} />
        <ToDoForm addTask={addTask}/>
      </div>
      </body>
    </div>
    
  );
}


