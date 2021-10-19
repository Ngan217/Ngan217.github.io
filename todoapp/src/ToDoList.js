import React,{useState} from 'react';
import {ToDo} from './ToDo';


export const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <>
                        <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                    </>
                )
            })}

            <div className= "button"><button id ="clear" style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button></div>
        </div>
    );
};