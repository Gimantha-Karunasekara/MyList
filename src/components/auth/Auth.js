import React, { useState } from 'react'
import classes from './Auth.module.css';

const Auth = () => {

    const [isLogin, setIsLogin] = useState(true);

    const authSwitchHandler = () => {
        setIsLogin((prevState) => !prevState)
    }

    return (
        <div className='container'>
            <div className={classes.auth__container}>
                <div className={classes.auth__content}>
                    <div className={classes.auth__title}>{isLogin ? "Login" : "Signup"}</div>
                    <div className={classes.auth__inputs}>
                        {!isLogin && <input type="text" className={classes.auth__input} placeholder="Username"/>}
                        <input type="text" className={classes.auth__input} placeholder="Email"/>
                        <input type="text" className={classes.auth__input} placeholder="Password"/>
                    </div>
                    <div className={classes["auth__button-box"]}>
                        <button type='button' className={classes.auth__submit}>{isLogin ? "Login" : "Signup"}</button>
                        <button type='button' onClick={authSwitchHandler}>{isLogin ? "Signup" : "Login"}</button>
                    </div>
                </div>
                <div className={classes.auth__logo}>
                    <div className={classes.auth__logoText}>MyList&#8482;</div>
                </div>
            </div>
        </div>
    )
}

export default Auth