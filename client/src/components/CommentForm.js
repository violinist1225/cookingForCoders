import React, {useContext, useState} from "react"
import {UserContext} from "../context/UserContext"



export default function CommentForm(props) {
  const {commentFormHandleChange, commentFormState, addComment} = useContext(UserContext)


    return (
        <React.Fragment>
        <form 
        onSubmit=
        {(e) => {
            addComment(e, props.issueId)
            props.setHideCommentForm(prevState => !prevState)
            }}>
                
            <input name="text" value={commentFormState && commentFormState.title} onChange={commentFormHandleChange}/>
            <button>Submit</button>
        </form>
        <button onClick={() => props.setHideCommentForm(prevState => !prevState) }>Cancel</button>
        </React.Fragment>
    )
} 
 
