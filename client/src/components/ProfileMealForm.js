import React, {useContext, useState} from "react"
import {UserContext} from "../context/UserContext"
import Profile from "./Profile"




export default function ProfileMealForm(props) {
  const {mealFormHandleChange, mealFormState, addMeal } = useContext(UserContext)


    return (
        <div>





        <form onSubmit={(e) => addMeal(e, mealFormState)}>
            <input placeholder= "TITLE" name="title" value={mealFormState && mealFormState.title} onChange={mealFormHandleChange}/>
            <input placeholder= "DESCRIPTION"name="description" value={mealFormState && mealFormState.description} onChange={mealFormHandleChange} />
            <input placeholder= "IMAGE URL" name="imageUrl" value={mealFormState && mealFormState.imageUrl} onChange={mealFormHandleChange}/>
            <input placeholder="TIME TO PREPARE MEAL IN MINUTES" name="timeToPrepareInMinutes" value={mealFormState && mealFormState.timeToPrepareInMinutes} onChange={mealFormHandleChange}/>
            <input placeholder="TIME TO COOK MEAL IN MINUTES"name="timeToCookInMinutes" value={mealFormState && mealFormState.timeToCookInMinutes} onChange={mealFormHandleChange}/>
            <input placeholder="HOW LONG MEAL WILL LAST A CODER IN DAYS"name="durationOfMealPerCoderInDays" value={mealFormState && mealFormState.durationOfMealPerCoderInDays} onChange={mealFormHandleChange}/>
            <button>SUBMIT</button>
        </form>
        </div>
    )
}