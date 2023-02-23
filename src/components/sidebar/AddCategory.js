import React, { useState } from 'react'
import classes from './AddCategory.module.css';

const AddCategory = () => {

    const [showTextbox, setShowTextBox] = useState(false);

    const showTextBoxHandler = () => {
        setShowTextBox(true);
    }

    const hideTextBoxHandler = () => {
        setShowTextBox(false);

    };

    return (
        <div className={classes.addCategory}>
            {!showTextbox &&
                <>
                    <button className={classes.addCategory__button} onClick={showTextBoxHandler}>
                        <i className={`fa-sharp fa-solid fa-plus ${classes["addCategory__button-icon"]}`}></i>
                        Add Category
                    </button>
                </>
            }
            {showTextbox &&
                <div className={classes["addCategory__input-box"]}>
                    <input className={classes.addCategory__input}></input>
                    <div className={classes.addCategory__add}>
                        <i className="fa-sharp fa-solid fa-plus"></i>
                    </div>
                    <div onClick={hideTextBoxHandler} className={classes.addCategory__close}>
                        <i className="fa-sharp fa-solid fa-xmark" ></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default AddCategory