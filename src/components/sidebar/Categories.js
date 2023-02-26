import React, { useEffect, useState } from 'react'
import { useHttpClient } from '../../hooks/http-hook';
import classes from './Categories.module.css';


const Categories = ({ userId, changeCategory }) => {

    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        const fetchCatgeories = async () => {
            try {
                const response = await sendRequest(`http://localhost:5000/api/categories/${userId}`);
                setCategories(response.categories);
            } catch (error) {
                
            }
        };

        fetchCatgeories();

    },[sendRequest,userId]);

    const changeCategoryHandler = (event) => {
        console.log(event.currentTarget.id);
    };

    const deleteCategoryHandler = (event) => {

    };

    return (
        <div className={classes.categories__container}>
            {isLoading && <p className={classes.categories__msg}>{isLoading && "Loading..."}</p>}
            {error && <p className={classes.categories__msg}>{error && {error}}</p>}
            {!isLoading && !error && categories.map((c) => {
                return (
                    <div className={`${classes.category}`} id={c.id} onClick={changeCategoryHandler}>
                        <i className="fa-solid fa-list category__icon"></i>
                        <div className={classes.category__name}>{c.name}</div>
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