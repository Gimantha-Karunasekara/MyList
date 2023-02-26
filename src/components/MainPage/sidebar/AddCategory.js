import React, { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../../context/auth-context';
import { useHttpClient } from '../../../hooks/http-hook';
import LoadingSpinner from '../../common/LoadingSpinner';
import classes from './AddCategory.module.css';

const AddCategory = ({ onCreateCategory }) => {

    const [showTextbox, setShowTextBox] = useState(false);
    const { isLoading, error, sendRequest } = useHttpClient();
    const authCtx = useContext(AuthContext);
    const inputRef = useRef();

    const showTextBoxHandler = () => {
        setShowTextBox(true);
    }

    const hideTextBoxHandler = () => {
        setShowTextBox(false);

    };

    const createCategoryHandler = async (event) => {

        hideTextBoxHandler();

        const name = inputRef.current.value;

        if (name && name !== "") {
            try {

                const response = await sendRequest('http://localhost:5000/api/categories', 'POST', JSON.stringify({
                    "userId": authCtx.userId,
                    "name": name
                }),
                    {
                        "Content-Type": "application/json"
                    });

                onCreateCategory(response);

            } catch (error) {

            }

        }

    };

    return (
        <div className={classes.addCategory}>
            {!showTextbox &&
                <>
                    <button className={classes.addCategory__button} onClick={showTextBoxHandler}>
                        {isLoading && <LoadingSpinner />}
                        {!isLoading && error && { error }}
                        {!isLoading && !error && <i className={`fa-sharp fa-solid fa-plus ${classes["addCategory__button-icon"]}`}></i>}
                        {!isLoading && !error && "Add Category"}
                    </button>
                </>
            }
            {showTextbox &&
                <div className={classes["addCategory__input-box"]}>
                    <input ref={inputRef} className={classes.addCategory__input}></input>
                    <div className={classes.addCategory__buttons}>
                        <div className={classes.addCategory__add} onClick={createCategoryHandler}>
                            <i className="fa-sharp fa-solid fa-plus"></i>
                        </div>
                        <div onClick={hideTextBoxHandler} className={classes.addCategory__close}>
                            <i className="fa-sharp fa-solid fa-xmark" ></i>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default AddCategory