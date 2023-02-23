import React from 'react'
import classes from './Tasks.module.css';

const Tasks = ({ tasks }) => {
    return (
        <div className={classes.tasks__container}>
            {tasks.map((task) => {
                return (
                    <div className={classes.task} >
                        <span className={classes.task__color} style={{ backgroundColor: `${task.color}` }}></span>
                        <div className={classes.task__text}>
                            {task.text}
                        </div>
                        <div className={classes.task__done}>
                            <i className="fa-sharp fa-solid fa-circle-check"></i>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Tasks