import React from 'react'
import AddTask from './AddTask';
import classes from './Content.module.css';
import Tasks from './Tasks';

const TASKS = [
  {
    text: "Build Back-end using node.js",
    color: "#3fd4fa"
  },
  {
    text: "Build new React App",
    color: "#fd99af"
  },
  {
    text: "Build Back-end using node.js",
    color: "#3fd4fa"
  },
  {
    text: "Build new React App",
    color: "#fd99af"
  },
  {
    text: "Build Back-end using node.js",
    color: "#3fd4fa"
  },
  {
    text: "Build new React App",
    color: "#fd99af"
  }
];

const selected = "My List"

const Content = () => {

  const noTaks = (
      <div className={classes.noItems}>
          No Tasks Found 
      </div>
  )

  return (
    <div className={classes.content}>
      <div className={classes.content__title}>
        {selected}
      </div>
      <AddTask/>
      <Tasks tasks={TASKS}/>
    </div>
  )
}

export default Content