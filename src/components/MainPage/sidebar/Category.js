import React from 'react'
import classes from './Category.module.css';

const Category = ({id, name, changeCategory, deleteCategory}) => {

    const changeCategoryHandler = (event) => {
        changeCategory(id);
    };

    const deleteCategoryHandler = (event) => {
        
        deleteCategory(id);

    };

    return (
        <div className={`${classes.category}`} key={id}>
            <i className="fa-solid fa-list category__icon"></i>
            <div className={classes.category__name} onClick={changeCategoryHandler}>{name}</div>
            <div className={classes.category__delete} onClick={deleteCategoryHandler}>
                <i className="fa-solid fa-trash-can"></i>
            </div>
        </div>
    )
}

export default Category