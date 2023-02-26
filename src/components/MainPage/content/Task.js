import React from 'react'
import { useHttpClient } from '../../../hooks/http-hook';
import LoadingSpinner from '../../common/LoadingSpinner';

import classes from './Task.module.css';

const Task = ({id, text, color, onDelete}) => {

    const {isloading,error, sendRequest} = useHttpClient();

    const onDeleteHandler = async (event) => {

        try {
            await sendRequest(`http://localhost:5000/api/tasks/${id}`, 'DELETE', null, {});
            if (!error) {
                onDelete(id);
            }
            else{
                console.log(error);
            }
        } catch (error) {
            throw new Error(error);
        }
    };

    return (
        <div className={classes.task} key={id}>
            <span className={classes.task__color} style={{ backgroundColor: `${color}` }}></span>
            <div className={classes.task__text}>
                {text}
            </div>
            <div className={classes.task__done} onClick={onDeleteHandler}>
                {isloading ? <LoadingSpinner/> :  <i className="fa-sharp fa-solid fa-circle-check"></i>} 
            </div>
        </div>
    )
}

export default Task