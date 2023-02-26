import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/auth-context';
import { useHttpClient } from '../../../hooks/http-hook';
import LoadingSpinner from '../../common/LoadingSpinner';
import classes from './AddTask.module.css';

const AddTask = ({ onAdd, category }) => {

  const [text, setText] = useState('');
  const { isLoading,error, sendRequest, clearError } = useHttpClient();
  const authCtx = useContext(AuthContext);

  const textChangeHandler = (event) => {
    setText(event.target.value);
  };

  const addTaskHandler = async (event) => {
    clearError();
    event.preventDefault();

    const colors = document.getElementsByName('color');

    let selectedColor;
    colors.forEach(element => {
      if (element.checked) {
        selectedColor = element.value;
      }
    });

    const response = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/tasks`, 'POST', JSON.stringify({
      userId: authCtx.userId,
      category: category,
      text: text,
      color: selectedColor
    }),
    {
      'Content-Type': 'application/json'
    })

    if (response && !error) {
      setText('');
      onAdd(response);
    }
  };

  return (
    <div className={classes.addTask}>
      <div className={classes.addTask__colors}>
        <div className={classes["addTask__colors-group"]}>
          <input id="color-1" type="radio" className={classes["addTask__colors-radio"]} name="color" value="#3fd4fd" defaultChecked/>
          <label htmlFor="color-1" className={classes["addTask__colors-color"]} style={{ backgroundColor: "#3fd4fd" }} >&nbsp;</label>
          <label className={classes["addTask__colors-background"]}>&nbsp;</label>
        </div>
        <div className={classes["addTask__colors-group"]}>
          <input id="color-2" type="radio" className={classes["addTask__colors-radio"]} name="color" value={"#fd99af"}/>
          <label htmlFor="color-2" className={classes["addTask__colors-color"]} style={{ backgroundColor: "#fd99af" }} >&nbsp;</label>
          <label className={classes["addTask__colors-background"]}>&nbsp;</label>
        </div>
        <div className={classes["addTask__colors-group"]}>
          <input id="color-3" type="radio" className={classes["addTask__colors-radio"]} name="color" value={"#fac608"}/>
          <label htmlFor="color-3" className={classes["addTask__colors-color"]} style={{ backgroundColor: "#fac608" }} >&nbsp;</label>
          <label className={classes["addTask__colors-background"]}>&nbsp;</label>
        </div>
      </div>
      <input type="text" className={classes.addTask__input} placeholder="What's next ?" onChange={textChangeHandler} value={text}/>
      <button type='button' className={classes["addTask__addButton"]} onClick={addTaskHandler} >
          {isLoading ? <LoadingSpinner/> : <i className={`fa-sharp fa-solid fa-plus ${classes["addTask__addButton-icon"]}`}></i>}
      </button>
    </div>
  )
}

export default AddTask