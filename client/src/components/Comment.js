import React, {useContext, useEffect, useState} from "react"
import {UserContext} from "../context/UserContext.js"
export default function Comment({text, _id, meal, mealId, userId}){
   
    const {deleteComment, editCommentFormState, setEditCommentFormState, getMeals, getUsers, getComments, editCommentHandleChange, editComment, userState, users } = useContext(UserContext)
    const [editIsClicked, setEditIsClicked] = useState(true)
    const user = users.find(user => user._id === userId).username

    
    
    useEffect( () => setEditCommentFormState({text: text}),[])
    useEffect(() => {
        getMeals()
        getUsers()
        getComments()

        return
   }, [])


    return (
        <div>
            @{user} said "{text}"
            {!editIsClicked? 


            <form onSubmit={(e) => {
                editComment(e, _id, mealId)
                setEditIsClicked(prev => !prev)
                //toggle setEdit.. above to make form disappear after edits are submitted 
            }}>
                <input name="text" value={editCommentFormState ?editCommentFormState.text: null} onChange={editCommentHandleChange}/>
                <button>Submit</button>
                <button onClick={()=> setEditIsClicked(prev => !prev)}>Cancel</button>
                
            </form>


            :null}





            {userState.user._id === userId?<button onClick={()=> deleteComment(_id)}>Delete Comment</button>:null}


            {userState.user._id === userId && editIsClicked? 

            <button onClick={()=> setEditIsClicked(prev => !prev)}>Edit Comment</button>
            
            :null}


        </div>
    )
    
}