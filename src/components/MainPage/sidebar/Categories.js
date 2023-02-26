import React from 'react'
import LoadingSpinner from '../../common/LoadingSpinner';
import classes from './Categories.module.css';
import Category from './Category';


const Categories = ({ categories, changeCategory, isLoading, error, deleteCategory}) => {

    return (
        <div className={classes.categories__container}>
            {isLoading && <LoadingSpinner/>}
            {error && <p className={classes.categories__msg}>{error && {error}}</p>}
            {!isLoading && !error && categories.map((c) => {
                return (
                    <Category 
                        key={c.id} 
                        id={c.id} 
                        name={c.name} 
                        changeCategory={changeCategory} 
                        deleteCategory={deleteCategory}
                    />
                )
            })
        }
        </div>

    )
}

export default Categories