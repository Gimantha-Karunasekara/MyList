import React, { useState } from 'react'
import Content from './content/Content'
import SideBar from './sidebar/SideBar'

const MainPage = () => {

    const [category, setCategory] = useState();

    const changeCategoryHandler = (categoryId) => {
        setCategory(categoryId);
    }; 

    return (
        <div className='container'>
            <SideBar changeCategory={changeCategoryHandler}/>
            <Content category={category}/>
        </div>
    )
}

export default MainPage