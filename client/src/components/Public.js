import React, {useContext, useEffect, useState} from "react"
import { AuthContext } from "../context/AuthContext.js"
import {UserContext} from "../context/UserContext.js"
import EditMealForm from "./EditMealForm.js"
import Meal from "./Meal.js"
export default function Public(){
    const {meals, getMeals, users, getUsers, comments, getComments} = useContext(UserContext)
    const {setUserState} = useContext(AuthContext)
   
    const renderedMeals = meals.map(meal => (
        
        <Meal meal={meal} 
        username={users && users.find(user => user._id === meal.userId) &&  users.find(user => user._id === meal.userId).username}
        comments={comments && comments.filter(comment => meal._id === comment.mealId )}
        /> 
        

    ))
    console.log(comments)
    useEffect(() => {
         getMeals()
         getUsers()
         getComments()
         setUserState({
            token: localStorage.getItem("token") || "",
            user: JSON.parse(localStorage.getItem("user")) || "",
            errMsg: ""
        })
         return
    }, [])

    return (
        <div>
            <h1 style={{textAlign: "center", marginBottom: "25px", color: "palegoldenrod"}} >Public Posts</h1>
            {renderedMeals}
           
        </div>
    )
    
}