import React, {useContext, useEffect, useState} from "react"
import {UserContext} from "../context/UserContext"
import "../styles/editMealForm.css"



export default function EditMealForm(props) {
  const {editMealHandleChange, editFormState, editMeal, setEditFormState} = useContext(UserContext)
    console.log(props)
    useEffect(() => setEditFormState({title: props.meal && props.meal.title, description: props.meal && props.meal.description, imageUrl: props.meal && props.meal.imageUrl, timeToPrepareInMinutes: props.meal && props.meal.timeToPrepareInMinutes, timeToCookInMinutes: props.meal && props.meal.timeToCookInMinutes, durationOfMealPerCoderInDays: props.meal && props.meal.durationOfMealPerCoderInDays   }), [])
    return (
        <React.Fragment>
  <form  onSubmit=
        {(e) => {
            editMeal(e, props.meal._id)
            props.setHideEditForm(prevState => !prevState)
            }}>
        <div>
          <label className="desc" id="title1" htmlFor="Field1">TITLE</label>
          <div>
            <input  name="title" value={editFormState && editFormState.title} onChange={editMealHandleChange} type="text" className="field text fn" defaultValue size={8} tabIndex={1} />
          </div>
        </div><div>
          <label className="desc"  htmlFor="Field1">DESCRIPTION</label>
          <div>
            <input  placeholder= "DESCRIPTION" name="description" value={editFormState && editFormState.description} onChange={editMealHandleChange} type="text" className="field text fn" defaultValue size={8} tabIndex={1} />
          </div>
        </div>
        <div>
          <label className="desc" id="title1" htmlFor="Field1">IMAGE URL</label>
          <div>
            <input name="imageUrl" value={editFormState && editFormState.imageUrl} onChange={editMealHandleChange}   type="text" className="field text fn" defaultValue size={8} tabIndex={1} />
          </div>
        </div>
        <div>
          <label className="desc" id="title1" htmlFor="Field1">TIME TO PREPARE MEAL IN MINUTES</label>
          <div>
            <input name="timeToPrepareInMinutes" value={editFormState && editFormState.timeToPrepareInMinutes} onChange={editMealHandleChange} type="text" className="field text fn"  size={8} tabIndex={1} />
          </div>
        </div>

        
        <div>
          <label className="desc" id="title1" htmlFor="Field1">HOW LONG WILL MEAL LAST IN DAYS?</label>
          <div>
            <input name="timeToCookInMinutes" value={editFormState && editFormState.timeToCookInMinutes} onChange={editMealHandleChange} type="text" className="field text fn"  size={8} tabIndex={1} />
          </div>

        </div>
        <div>
          
          <div>

          </div>

          <div>
          <label className="desc" id="title1" htmlFor="Field1">TIME TO COOK MEAL IN MINUTES</label>
          <div>
            <input name="durationOfMealPerCoderInDays" value={editFormState && editFormState.durationOfMealPerCoderInDays} onChange={editMealHandleChange} type="text" className="field text fn"  size={8} tabIndex={1} />
          </div>
            </div>

        </div>

       



       

        
        <div>
          <div>
            <input id="saveForm" name="saveForm" type="submit" defaultValue="Submit" />
          </div>
        </div>
      </form>
        







        <button onClick={() => props.setHideEditForm(prevState => !prevState) }>CANCEL</button>
        </React.Fragment>
    )
} 
 
