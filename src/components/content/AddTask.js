import React from 'react'
import classes from './AddTask.module.css';

const AddTask = () => {
  return (
    <div className={classes.addTask}>
        <div className={classes.addTask__colors}>
          <div className={classes["addTask__colors-group"]}>
            <input id="color-1" type="radio" className={classes["addTask__colors-radio"]} name="color"/>
            <label htmlFor="color-1" className={classes["addTask__colors-color"]} style={{backgroundColor: "#3fd4fd"}} >&nbsp;</label>
            <label className={classes["addTask__colors-background"]}>&nbsp;</label>
          </div>
          <div className={classes["addTask__colors-group"]}>
            <input id="color-2" type="radio" className={classes["addTask__colors-radio"]} name="color"/>
            <label htmlFor="color-2"className={classes["addTask__colors-color"]} style={{backgroundColor: "#fd99af"}} >&nbsp;</label>
            <label className={classes["addTask__colors-background"]}>&nbsp;</label>
          </div>
          <div className={classes["addTask__colors-group"]}>
            <input id="color-3" type="radio" className={classes["addTask__colors-radio"]} name="color"/>
            <label htmlFor="color-3" className={classes["addTask__colors-color"]} style={{backgroundColor: "#fac608"}} >&nbsp;</label>
            <label className={classes["addTask__colors-background"]}>&nbsp;</label>
          </div>
        </div>
        <input type="text" className={classes.addTask__input} placeholder="What's next ?"/>
        <button type='button' className={classes["addTask__addButton"]}>
            <i className={`fa-sharp fa-solid fa-plus ${classes["addTask__addButton-icon"]}`}></i>
        </button>
      </div>
  )
}

export default AddTask