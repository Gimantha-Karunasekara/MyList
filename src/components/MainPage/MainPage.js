import React, { useCallback, useState } from 'react'
import Content from './content/Content'
import SideBar from './sidebar/SideBar'

const MainPage = () => {

    //selected category to be used to fetch tasks
    const [selectedCategory, setSelectedCategory] = useState();

    const changeCategoryHandler = useCallback((categoryId) => {
        setSelectedCategory(categoryId);
    },[]); 


    return (
        <div className='container'>
            <SideBar changeCategory={changeCategoryHandler} selectedCategory={selectedCategory}/>
            <Content category={selectedCategory}/>
        </div>
    )
}

export default MainPage