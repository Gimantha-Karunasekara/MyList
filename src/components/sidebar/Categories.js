import React from 'react'
import classes from './Categories.module.css';


const Categories = ({categories}) => {
    return (
        <div className={classes.categories__container}>

            {categories.map((c) => {
                return (
                    <div className={`${classes.category}`}>
                        <i className="fa-solid fa-list category__icon"></i>
                        <div className={classes.category__name}>{c}</div>
                        <div className={classes.category__delete}>
                            <i className="fa-solid fa-trash-can"></i>
                        </div>
                    </div>
                )
            })

            }

        </div>

    )
}

export default Categories