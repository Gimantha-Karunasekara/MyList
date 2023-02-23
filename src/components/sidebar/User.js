import React from 'react'
import classes from './User.module.css';

const User = (props) => {
  return (
    <div className={classes.user}>
      <div className={classes.user__logout}>
        <button className={classes["user__logout-button"]}>
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