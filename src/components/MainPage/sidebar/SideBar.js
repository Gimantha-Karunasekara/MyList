import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../context/auth-context';
import { useHttpClient } from '../../../hooks/http-hook';
import Divider from '../../common/Divider';
import AddCategory from './AddCategory';
import Categories from './Categories';
import classes from './SideBar.module.css';
import User from './User';


const SideBar = ({changeCategory, selectedCategory}) => {

  const [firstLoad, setFirstLoad] = useState(true);
  
  const AuthCtx = useContext(AuthContext);

  const { isLoading, error, sendRequest} = useHttpClient();

  const [categories, setCategories] = useState([]);

  // fetch categories on load
  useEffect(() => {

      const fetchCatgeories = async () => {
          try {
              const response = await sendRequest(`http://localhost:5000/api/categories/${AuthCtx.userId}`);
              setCategories(response.categories);
          } catch (error) {
              
          }
      };

      fetchCatgeories();

  },[sendRequest,AuthCtx.userId]);

  useEffect(() => {
    if (firstLoad && categories[0]) {
      changeCategory(categories[0].id);  
      setFirstLoad(false);
    }

  }, [firstLoad, changeCategory, categories])
  
  const USER = {
      userName: AuthCtx.userName,
      userImg: "https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
  }
  
  // add new category to state
  const createCategoryHandler = (newCategory) => {
    setCategories(prevState => [newCategory, ...prevState])
  };

  // delete category and remove from state
  const deleteCategoryHandler = async(categoryId) => {
    try {
        await sendRequest(`http://localhost:5000/api/categories/${categoryId}`, 'DELETE');
        if (!error) {
          setCategories(prevState => prevState.filter(c => c.id !== categoryId));
        }
        if (selectedCategory === categoryId) {
          changeCategory(null)
        }
       
    } catch (error) {
        
    }
};

  return (
    <div className={classes.sidebar}>
        <User userData={USER}/>
        <Divider/>
        <Categories 
          categories={categories} 
          changeCategory={changeCategory}
          isLoading={isLoading}
          error={error}
          deleteCategory={deleteCategoryHandler}
          />
        <AddCategory onCreateCategory={createCategoryHandler}/>
    </div>
  )
}

export default SideBar