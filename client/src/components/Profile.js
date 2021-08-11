import React, {createContext, useContext, useEffect, useState} from "react"
import {AuthContext} from "../context/AuthContext.js"
import { UserContext } from "../context/UserContext.js"
import ProfileMealForm from "./ProfileMealForm.js"
import Meal from "./Meal.js"

export default function Profile(){
    const {user, setUserState} = useContext(AuthContext)
    const {meals, getMeals, users, getUsers, deleteMeal} = useContext(UserContext)
    const {username} = user
    

    const myMeals = meals.map(meal => (
        meal.userId === user._id?


        <React.Fragment>
            <Meal meal={meal} username={users && users.find(user => user._id === meal.userId) &&  users.find(user => user._id === meal.userId).username} onProfilePage={true}/> 

        </React.Fragment>



        :null

    ))

    useEffect(() => {
        setUserState({
            token: localStorage.getItem("token") || "",
            user: JSON.parse(localStorage.getItem("user")) || "",
            errMsg: ""
        })
        getMeals()}, 
        [])

    return (
        <div>
            <h1>Welcome {username}!</h1>
            <ProfileMealForm />
            <h2 style={{textAlign: "center", color: "purple", }}>{username}'s Meals</h2>
            {myMeals}
           
            
        </div>
    )
    
}