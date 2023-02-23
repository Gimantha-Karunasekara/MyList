import React, { useState } from 'react'
import Divider from '../common/Divider';
import AddCategory from './AddCategory';
import Categories from './Categories';
import classes from './SideBar.module.css';
import User from './User';

const USER = {
    userName: "Gimantha Karunasekara",
    userImg: "https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    categories: ["My List", "Work Tasks"]
}

const SideBar = () => {

  // For add category text box (to show and hide)

  

  return (
    <div className={classes.sidebar}>
        <User userData={USER}/>
        <Divider/>
        <Categories categories={USER.categories}/>
        <AddCategory/>
    </div>
  )
}

export default SideBar