import React from 'react'
import Content from './content/Content'
import SideBar from './sidebar/SideBar'

const MainPage = () => {
    return (
        <div className='container'>
            <SideBar />
            <Content />
        </div>
    )
}

export default MainPage