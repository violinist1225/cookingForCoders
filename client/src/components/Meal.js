import React, {useContext, useEffect, useState} from "react"
import { UserContext } from "../context/UserContext"
import CommentForm from "./CommentForm"
import Comment from "./Comment"
import EditMealForm from "./EditMealForm.js"

import "../styles/meal.css"
export default function Meal({meal, username, comments, onProfilePage}){
    const [commentToggle, setCommentToggle] = useState(false)
    const [hideCommentForm, setHideCommentForm ] = useState(true)
    const [hideEditForm, setHideEditForm ] = useState(true)
    const {likeMeal, dislikeMeal, deleteMeal, user} = useContext(UserContext)

    const renderedComments = comments && comments.map(comment => <Comment mealId={meal._id} {...comment} />)
    
    return (
        <React.Fragment> 
         <div>
        
        
        <div className="profile-body">
          <div className="photo">
            <img src={meal.imageUrl === undefined?`https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`:meal.imageUrl} alt="Image Not Found"   className="image--cover" />
          </div>
          <div className="profile">
            <div id="rating-stars" align="center">
              <div className="stars">
                <label aria-label="first-star" className="star-label" htmlFor="rate-1"><i className="rate-icon star-icon fa fa-star" /></label>
                <input className="rate-input" name="rating" id="rate-1" defaultValue={1} type="radio" />
                <label aria-label="second-star" className="star-label" htmlFor="rate-2"><i className="rate-icon star-icon fa fa-star" /></label>
                <input className="rate-input" name="rating" id="rate-2" defaultValue={2} type="radio" />
                <label aria-label="third-star" className="star-label" htmlFor="rate-3"><i className="rate-icon star-icon fa fa-star" /></label>
                <input className="rate-input" name="rating" id="rate-3" defaultValue={3} type="radio" />
                <label aria-label="fourth-star" className="star-label" htmlFor="rate-4"><i className="rate-icon star-icon fa fa-star" /></label>
                <input className="rate-input" name="rating" id="rate-4" defaultValue={4} type="radio" />
                <label aria-label="fifth-star" className="star-label" htmlFor="rate-5"><i className="rate-icon star-icon fa fa-star" /></label>
                <input className="rate-input" name="rating" id="rate-5" defaultValue={5} type="radio" />
              </div>
            </div>
            <h1 className="username">{meal.title}</h1>
            {onProfilePage ? null: <h2 className="profession"> Created by @{username}</h2>}
        
            <p className="descricao">{meal.description}</p>
            <p className="descricao">Time to Prepare in Minutes: {meal.timeToPrepareInMinutes}</p>
            <p className="descricao">Time To Cook In Minutes: {meal.timeToCookInMinutes}</p>
            <p className="descricao">Duration Of Meal Per Coder In Days: {meal.durationOfMealPerCoderInDays}</p>
            <div className="socialmedia">
                
              <div><a onClick={(e) => { 
                  e.preventDefault()
                  likeMeal(meal)}} href="#" className="button-twitter"><i className="fa fa-thumbs-up" /></a>
                {meal.likes} 
                </div>
              <div><a onClick={(e) => { 
                  e.preventDefault()
                  dislikeMeal(meal)}} href="#" className="button-whatsapp"><i className="fa fa-thumbs-down" /></a>
              {meal.dislikes}</div>
            </div>
          </div>
        </div></div> 
        <div>
            
           {onProfilePage? null : <button style={{display: "block"}} onClick={()=> setCommentToggle(prev => !prev)}>{commentToggle?"Hide":"Show"} Comment</button>}
            {user}
            {commentToggle?renderedComments:null}
            {onProfilePage?
                        <React.Fragment>
                        <button onClick= {() => deleteMeal(meal._id)}>Delete</button>
                        <button onClick={()=> setHideEditForm(prevState => !prevState)} >Edit</button>
                        </React.Fragment>
            :
            null
            }
              {onProfilePage?null:hideCommentForm?<button onClick={() => setHideCommentForm(prevState => !prevState)}>Comment</button>:<CommentForm mealId={meal._id} setHideCommentForm={setHideCommentForm} />}
              
            {
            hideEditForm?
            null:
            <React.Fragment>
            <EditMealForm meal={meal} setHideEditForm={setHideEditForm} />{/*Use conditional rendering to hide this form*/}
            </React.Fragment>
            }
        </div>
        </React.Fragment>
       
    )
    
}