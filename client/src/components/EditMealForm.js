import React, {useContext, useEffect, useState} from "react"
import {UserContext} from "../context/UserContext"



export default function EditMealForm(props) {
  const {editMealHandleChange, editFormState, editMeal, setEditFormState} = useContext(UserContext)
    console.log(props)
    useEffect(() => setEditFormState({title: props.meal && props.meal.title, description: props.meal && props.meal.description, imageUrl: props.meal && props.meal.imageUrl }), [])
    return (
        <React.Fragment>
        <form 
        onSubmit=
        {(e) => {
            editMeal(e, props.meal._id)
            props.setHideEditForm(prevState => !prevState)
            }}>
                
            <input name="title" value={editFormState && editFormState.title} onChange={editMealHandleChange}/>
            <input name="description" value={editFormState && editFormState.description} onChange={editMealHandleChange} />
            <input name="imageUrl" value={editFormState && editFormState.imageUrl} onChange={editMealHandleChange}/>
            <input name="timeToPrepareInMinutes" value={editFormState && editFormState.timeToPrepareInMinutes} onChange={editMealHandleChange}/>
            <input name="timeToCookInMinutes" value={editFormState && editFormState.timeToCookInMinutes} onChange={editMealHandleChange}/>
            <input name="durationOfMealPerCoderInDays" value={editFormState && editFormState.durationOfMealPerCoderInDays} onChange={editMealHandleChange}/>
            <button>SUBMIT</button>
        </form>
        <button onClick={() => props.setHideEditForm(prevState => !prevState) }>CANCEL</button>
        </React.Fragment>
    )
} 
 
