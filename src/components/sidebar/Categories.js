import React from 'react'
import classes from './Categories.module.css';


const Categories = ({categories}) => {
    return (
        <div className={classes.categories__container}>

            {categories.map((c) => {
                return (
                    <div className={`${classes.category} ${classes.category__selected}`}>
                        <i class="fa-solid fa-list category__icon"></i>
                        <div className={classes.category__name}>{c}</div>
                    </div>
                )
            })

            }

        </div>

    )
}

export default Categories