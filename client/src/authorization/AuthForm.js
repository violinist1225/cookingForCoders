import React, {useContext, useEffect} from "react"
import {AuthContext} from "../context/AuthContext.js"


function AuthForm() {
    const {formState, handleChange, handleSignUp, handleLogin, errMsg} = useContext(AuthContext)
    useEffect(() => console.log(errMsg && errMsg), [errMsg])
    return (
        <React.Fragment>
        SignUp
        <form onSubmit={handleSignUp}>
            <input
            name="signupUsername"
            placeholder="Username"
            value={formState && formState.signupUsername}
            //ES6 ternary update does not require full formState && formState.signupUsername:null
            onChange={handleChange}
            />
            <input
            name="signupPassword"
            placeholder="Password"
            value={formState && formState.signupPassword}
            onChange={handleChange}
            />
            <button>Submit</button>

            
        </form>
        Login
        <form onSubmit={handleLogin}>
            <input
            name="loginUsername"
            placeholder="Username"
            value={formState && formState.loginUsername}
            onChange={handleChange}
            />
            <input
            name="loginPassword"
            placeholder="Password"
            value={formState && formState.loginPassword}
            onChange={handleChange}
            />
            <button>Submit</button>

            
        </form>
        {errMsg && errMsg && <p style={{color: "red"}}>{errMsg}</p>}
        </React.Fragment>
    )}


export default AuthForm