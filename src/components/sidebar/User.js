import React from 'react'
import classes from './User.module.css';

const User = (props) => {
  return (
    <div className={classes.user}>
        <div className={classes.user__img}>
            <img src={props.userData.userImg}/>
        </div>
        <div className={classes.user__name}>
            <span className={classes.logoText}>MyList &#8482;</span>
            {props.userData.userName}
        </div>
    </div>
  )
}

export default User