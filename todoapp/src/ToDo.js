import React from 'react';

export const ToDo = ({todo, handleToggle }) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div classname = "todolist" id={todo.id} key={todo.id + todo.task + todo.deadline} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? "todo complete" : "todo"} >
            <p>
                { todo.task +" (Deadline: "+ todo.deadline+")"}
                <label class="container">
                    <input type="checkbox" checked={todo.complete ? true : false}/>
                    <span class="checkmark"></span>
                </label>
            </p>
        </div>
    );
};
//<input id = "checkbox" type = "checkbox" checked= {todo.complete ? true : false}/>
