import React, {useContext, useState} from "react"
import {UserContext} from "../context/UserContext"
import Profile from "./Profile"
import "../styles/editMealForm.css"




export default function ProfileMealForm(props) {
  const {mealFormHandleChange, mealFormState, addMeal } = useContext(UserContext)


    return (
        <div style={{margin: "0 auto", width: "100%"}}>

<form onSubmit={(e) => addMeal(e, mealFormState)}>
        <div>
          <label className="desc" id="title1" htmlFor="Field1">TITLE</label>
          <div>
            <input  placeholder= "TITLE" name="title" value={mealFormState && mealFormState.title} onChange={mealFormHandleChange} type="text" className="field text fn" defaultValue size={8} tabIndex={1} />
          </div>
        </div><div>
          <label className="desc"  htmlFor="Field1">DESCRIPTION</label>
          <div>
            <input  placeholder= "DESCRIPTION"name="description" value={mealFormState && mealFormState.description} onChange={mealFormHandleChange} type="text" className="field text fn" defaultValue size={8} tabIndex={1} />
          </div>
        </div>
        <div>
          <label className="desc" id="title1" htmlFor="Field1">IMAGE URL</label>
          <div>
            <input  placeholder= "IMAGE URL" name="imageUrl" value={mealFormState && mealFormState.imageUrl} onChange={mealFormHandleChange} type="text" className="field text fn" defaultValue size={8} tabIndex={1} />
          </div>
        </div>
        <div>
          <label className="desc" id="title1" htmlFor="Field1">TIME TO PREPARE MEAL IN MINUTES</label>
          <div>
            <input placeholder="TIME TO PREPARE MEAL IN MINUTES" name="timeToPrepareInMinutes" value={mealFormState && mealFormState.timeToPrepareInMinutes} onChange={mealFormHandleChange} type="text" className="field text fn" defaultValue size={8} tabIndex={1} />
          </div>
        </div>
        <div>
          <label className="desc" id="title1" htmlFor="Field1">HOW LONG WILL MEAL LAST IN DAYS?</label>
          <div>
            <input placeholder="HOW LONG MEAL WILL LAST A CODER IN DAYS"name="durationOfMealPerCoderInDays" value={mealFormState && mealFormState.durationOfMealPerCoderInDays} onChange={mealFormHandleChange} type="text" className="field text fn" defaultValue size={8} tabIndex={1} />
          </div>


        </div>
        <div>
          <label className="desc" id="title1" htmlFor="Field1">TIME TO COOK MEAL IN MINUTES</label>
          <div>
            <input placeholder="TIME TO COOK MEAL IN MINUTES"name="timeToCookInMinutes" value={mealFormState && mealFormState.timeToCookInMinutes} onChange={mealFormHandleChange}  type="text" className="field text fn" defaultValue size={8} tabIndex={1} />
          </div>


        </div>
       



       

        
        <div>
          <div>
            <input id="saveForm" name="saveForm" type="submit" defaultValue="Submit" />
          </div>
        </div>
      </form>



        
        </div>
    )
}