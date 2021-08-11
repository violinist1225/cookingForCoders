import React from "react"
import {Link} from "react-router-dom"
export default function NavBar(props){
    const {handleLogout} = props
    return (
    <div style={{width: "90vw", marginLeft: "5vw"}}>
        <div className="socialmedia">
            <div>
                <Link to="/profile" > Profile </Link>
                <Link style={{marginLeft: "15px"}} to="/public" > Public </Link>
            </div>
                <button onClick={handleLogout}>Logout</button>
            </div>
    </div>
    )
    
    
}