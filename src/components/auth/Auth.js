import React, { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../context/auth-context';
import { useHttpClient } from '../../hooks/http-hook';
import classes from './Auth.module.css';

const Auth = () => {

    const [isLogin, setIsLogin] = useState(true);

    const {isLoading, error, sendRequest, clearError} = useHttpClient();

    const authCtx = useContext(AuthContext);

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef()

    const submitHandler = async (event) => {
        event.preventDefault();
        clearError();

        if (isLogin) {
            try {
                const response = await sendRequest("http://localhost:5000/api/users/login", 'POST', JSON.stringify({
                    email: emailRef.current.value,
                    password: passwordRef.current.value
                }),
                {
                    'Content-Type': 'application/json'
                });
    

                authCtx.login(response.userId, response.username);
                
            } catch (error) {
                
            }
        }
        else{
            try {
                const response = await sendRequest("http://localhost:5000/api/users/signup", 'POST', JSON.stringify({
                    username: nameRef.current.value,
                    email: emailRef.current.value,
                    password: passwordRef.current.value
                }),
                {
                    'Content-Type': 'application/json'
                });
    
                authCtx.login(response.userId, response.username);

                
            } catch (error) {
                
            }

        }
    };

    const authSwitchHandler = () => {
        setIsLogin((prevState) => !prevState)
    }

    return (
        <div className='container'>
            <div className={classes.auth__container}>
                <form className={classes.auth__content} onSubmit={submitHandler}>
                    <div className={classes.auth__title}>{isLogin ? "Login" : "Signup"}</div>
                    <div className={classes.auth__inputs}>
                        {!isLogin && <input ref={nameRef} type="text" className={classes.auth__input} placeholder="Username" disabled={isLoading ? true : false }/>}
                        <input ref={emailRef} type="text" className={classes.auth__input} placeholder="Email" disabled={isLoading ? true : false }/>
                        <input ref={passwordRef} type="password" className={classes.auth__input} placeholder="Password" disabled={isLoading ? true : false }/>
                        <p className={classes.error}>{error ? error : ''}</p>
                    </div>
                    <div className={classes["auth__button-box"]}>
                        <button type='submit'  className={classes.auth__submit}>{isLoading ? "Loading..." : isLogin ? "Login" : "Signup"}</button>
                        <button type='button' onClick={authSwitchHandler}>{isLogin ? "Signup" : "Login"}</button>
                    </div>
                </form>
                <div className={classes.auth__logo}>
                    <div className={classes.auth__logoText}>MyList&#8482;</div>
                </div>
            </div>
        </div>
    )
}

export default Auth