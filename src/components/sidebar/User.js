import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth-context';
import classes from './User.module.css';

const User = (props) => {

  const authCtx = useContext(AuthContext);

  const logOutHandler = (event) => {
    event.preventDefault();

    authCtx.logout();
  };

  return (
    <div className={classes.user}>
      <div className={classes.user__logout}>
        <button className={classes["user__logout-button"]} onClick={logOutHandler}>
          <i className="fa-sharp fa-solid fa-arrow-right-from-bracket"></i>
          Logout
        </button>
      </div>
      <div className={classes.user__info}>
        <div className={classes.user__img}>
          <img src={props.userData.userImg} alt="User Profile" />
        </div>
        <div className={classes.user__name}>
          <span className={classes.logoText}>MyList&#8482;</span>
          {props.userData.userName}
        </div>
      </div>
    </div>
  )
}

export default User