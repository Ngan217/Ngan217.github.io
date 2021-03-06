import React, { useState } from 'react';

export const ToDoForm = ({ addTask}) => {

    const [ userInput1, setUserInput1 ] = useState('');

    const handleChange1 = (e) => {
        setUserInput1(e.currentTarget.value)
    }

    const [ userInput2, setUserInput2 ] = useState('');

    const handleChange2 = (e) => {
        setUserInput2(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput1, userInput2);
        setUserInput1("");
        setUserInput2("");
    }

    return (
        <div className = "button">
            <form onSubmit={handleSubmit}>
            <label>Task : </label>
            <input value={userInput1} type="text" onChange={handleChange1} placeholder="Enter task..."/>
            <label> Deadline : </label>
            <input value={userInput2} type="datetime-local" onChange={handleChange2}/>
            <button id = "submit" >Submit</button>
            <br></br>
            <br></br>
            </form>
        </div>
    );
};
