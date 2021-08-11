import React, {useContext, useEffect} from "react"
import {AuthContext} from "../context/AuthContext.js"
import "../styles/authForm.css"


function AuthForm() {
    const {formState, handleChange, handleSignUp, handleLogin, errMsg} = useContext(AuthContext)
    useEffect(() => console.log(errMsg && errMsg), [errMsg])
    return (
        <React.Fragment>
        <div style={{display: "flex", justifyContent: "space-around", marginTop: "30px", height: "100vh"}}>
        <div className="form_wrapper">
          <div className="form_container">
            <div className="title_container">
              <h2>SIGNUP</h2>
            </div>
            <div className="row clearfix">
              <div className>
                <form onSubmit={handleSignUp} >   
                  <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope" /></span>
                    
                    <input 
            name="signupUsername"
            placeholder="Username"
            value={formState && formState.signupUsername}
            //ES6 ternary update does not require full formState && formState.signupUsername:null
            onChange={handleChange}
            type="text"   required />
                  </div>
                  <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock" /></span>
                    <input type="password" name="signupPassword"placeholder="Password"
                    value={formState && formState.signupPassword}
            onChange={handleChange} required />
                  </div>
                  
                  <input className="button" type="submit" defaultValue="Register" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="form_wrapper">
          <div className="form_container">
            <div className="title_container">
              <h2>LOGIN</h2>
            </div>
            <div className="row clearfix">
              <div className>
                <form onSubmit={handleLogin} >   
                  <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope" /></span>
                    
                    <input name="loginUsername"
            placeholder="Username"
            value={formState && formState.loginUsername}
            onChange={handleChange} type="text"   required />
                  </div>
                  <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock" /></span>
                    <input type="password" name="loginPassword" placeholder="Password" value={formState && formState.loginPassword}
            onChange={handleChange} required />
                  </div>
                  
                  <input className="button" type="submit" defaultValue="Register" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        
        <React.Fragment>
        {errMsg && errMsg && <p style={{color: "red"}}>{errMsg}</p>}
        </React.Fragment>
        </React.Fragment>

    )}


export default AuthForm