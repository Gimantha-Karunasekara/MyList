import React, { Fragment, useEffect, useState } from 'react'
import { useHttpClient } from '../../../hooks/http-hook';
import AddTask from './AddTask';
import classes from './Content.module.css';
import Tasks from './Tasks';

const Content = ({ category }) => {

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState();

  useEffect(() => {
    if (category && category !== "" ) {
      const fetchTasks = async () => {
        const response = await sendRequest(`http://localhost:5000/api/tasks/${category}`)
        if (response) {
          setTitle(response.name);
          setTasks(response.tasks);
        }
      };

      fetchTasks();
    }
    else{

    }

  }, [category, sendRequest]);

  const deleteTaskHandler = (deletedPlace) => {
    setTasks(prevState => prevState.filter(task => task.id !== deletedPlace))
  }

  const addTaskHadnler = (task) => {
    setTasks(prevState => [task, ...prevState]);
  };

  const noCategory = (
    <div className={classes.content__msg}>
      Select a category
    </div>
  )


  return (
    <div className={classes.content}>
      {category ? 
      <Fragment>
        <div className={classes.content__title}>
          {title}
        </div>
        <AddTask onAdd={addTaskHadnler} category={category} />
        <Tasks tasks={tasks} onDelete={deleteTaskHandler} />
      </Fragment> : noCategory}
      
    </div>
  )
}

export default Content