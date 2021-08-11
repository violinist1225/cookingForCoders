import React, {useContext} from "react"
import AuthPage from "./authorization/AuthPage.js"
import {Route, Switch, Redirect } from "react-router-dom"
import {AuthContext} from "./context/AuthContext.js"
import NavBar from './components/NavBar.js'
import Profile from './components/Profile.js'
import Public from './components/Public.js'


function App() {
  const {token, handleLogout} = useContext(AuthContext)
  return (
    <div className="app">
      <NavBar handleLogout={handleLogout}/>
      {/* {token && <Navbar logout={logout} />} */}
      <Switch>
         <Route 
          exact path="/" 
          render={()=> token ? <Redirect to= "/profile"/> : <AuthPage />} 
          />
        
        <Route 
          path="/profile"
          render={() => token? <Profile />:<Redirect to="/" />}
        />
        <Route 
          path="/public"
          render={() =>token? <Public />: <Redirect to="/" />}
        /> 
         {/* <Route 
          exact path="/" 
          render={()=> !token ? <Redirect to= "<AuthPage" /> : <Profile />}  
          /> */}
          {/* <Route
          exact path="/public"
          render={() => !token ? <Redirect to= "AuthPage" />: <Public />}  
          /> */}
      </Switch>
    </div>
    
  );
}
export default App;



