import React, {useEffect, useState} from "react"
import axios from "axios"

const UserContext = React.createContext()
const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

function UserContextProvider(props) {
    const initMealFormState = {
        title: "",
        description: "",
        imageUrl: "",
        timeToPrepareInMinutes:"",
        timeToCookInMinutes:"",
        durationOfMealPerCoderInDays:""
    }
    const initEditFormState = {
        title: "",
        description: "",
        imageUrl: "",
        timeToPrepareInMinutes:"",
        timeToCookInMinutes:"",
        durationOfMealPerCoderInDays:""
    }
    const initUserState = {
        token: localStorage.getItem("token") || "",
        user: JSON.parse(localStorage.getItem("user")) || ""
    }
    const [userState, setUserState ] = useState(initUserState)
    const [meals, setMeals] = useState([])
    const [users, setUsers] = useState([])
    const [mealFormState, setMealFormState] = useState(initMealFormState)
    const [editFormState, setEditFormState] = useState(initEditFormState)
    const [commentFormState, setCommentFormState] = useState({text: ""})
    const [editCommentFormState, setEditCommentFormState] = useState({text: ""})
    const [comments, setComments] = useState([])

    const getMeals = () => {
        userAxios.get("/api/meals/")
        .then(res => setMeals(res.data))
        .catch(err => console.log(err))
    }

    const getUsers = () => {
        userAxios.get("/api/users/")
        .then(res => setUsers(res.data))
        .catch(err => console.log(err))
    }
      
      const editMealHandleChange = (e) => {
          const {value, name} = e.target
          return setEditFormState(prevState => ({...prevState, [name]: value}))
   
       }

       const editCommentHandleChange = (e) => {
        const {value, name} = e.target
        return setEditCommentFormState(prevState => ({...prevState, [name]: value}))
 
     }

     const mealFormHandleChange = (e) => {
        const {value, name} = e.target
        return setMealFormState(prevState => ({...prevState, [name]: value}))
     }

     const commentFormHandleChange = (e) => {
        const {value, name} = e.target
        return setCommentFormState(prevState => ({...prevState, [name]: value}))
     }

     const deleteMeal = (id) => {
        userAxios.delete(`/api/meals/${id}`)
        .then(res => getMeals())
        .catch(err => console.log(err))
     }

    const  editMeal = (e, mealId) =>{ 
        console.log(editFormState, mealId) 
        e.preventDefault()
        userAxios.put(`/api/meals/${mealId}`, {...editFormState, userId: userState.user._id })
        .then(res => getMeals())
        .catch(err => console.log(err))


}
   const addMeal = (e, newMeal)=> {
        e.preventDefault()
        console.log("post ran")
        userAxios.post(`/api/meals/`, newMeal)
        .then(res => getMeals())
        .catch(err => console.log(err))
    }

    const getComments = ()=> {
        userAxios.get("/api/comments/")
        .then(res => setComments(res.data))
        .catch(err => console.log(err))
    }

    const addComment = (e, mealId) => {
        e.preventDefault()
        userAxios.post("/api/comments/", {...commentFormState, mealId: mealId, userId: userState.user._id})
        .then(res => getComments())
        .catch(err => console.log(err))
    }

    const deleteComment = (id) => {
       userAxios.delete(`/api/comments/${id}`)
       .then(res => getComments())
       .catch(err => console.log(err))
    }
    
    const  editComment = (e, commentId, mealId) =>{  
        e.preventDefault()
        userAxios.put(`/api/comments/${commentId}`, {...editCommentFormState, mealId: mealId, userId: userState.user._id })
        .then(res => getComments())
        .catch(err => console.log(err))


}

        const likeMeal = (likedMeal) => {
            userAxios.put(`/api/meals/likes/${likedMeal._id}`, likedMeal)
            .then(res => getMeals())
            .catch(err => console.log(err))
        }

        const dislikeMeal = (dislikedMeal) => {
            userAxios.put(`/api/meals/dislikes/${dislikedMeal._id}`, dislikedMeal)
            .then(res => getMeals())
            .catch(err => console.log(err))
        }
    return (
        <UserContext.Provider 
        value={{
            getMeals, meals, getUsers, editMeal, users, editMealHandleChange, getComments, comments, deleteComment, editCommentHandleChange, editComment, likeMeal, dislikeMeal, mealFormHandleChange, mealFormState, addMeal, deleteMeal, addComment, commentFormHandleChange, userState, setEditFormState, editFormState, editCommentFormState, setEditCommentFormState}}>
            {props.children}
        </UserContext.Provider>
    )
}
export {UserContext, UserContextProvider}