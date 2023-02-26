import React from 'react'
import Task from './Task';
import classes from './Tasks.module.css';

const Tasks = ({ tasks, onDelete }) => {

    return (
        <div className={classes.tasks__container}>
            {tasks.map((task) => {
                return (
                    <Task key ={task.id} id={task.id} text={task.text} color={task.color} onDelete={onDelete}/>
                )
            })}
        </div>
    )
}

export default Tasks