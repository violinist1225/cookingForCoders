const express = require("express");
const mongoose = require("mongoose");
const mealRouter = express.Router();
const User = require("../models/user");
const Meal = require("../models/meal");
const { update } = require("../models/user");

// Get All Meals
mealRouter.get("/", (req, res, next) => {
  //http://localhost:9000/api/meals/
  Meal.find((err, meals) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(meals)
  })
})



// Get meals by user id
mealRouter.get("/user", (req, res, next) => {
        //http://localhost:9000/api/meals/user
 Meal.find({ user: req.user._id }, (err,meals) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(meals)
  })
})

// Add new Meals 
mealRouter.post("/", (req, res, next) => {
      //http://localhost:9000/api/meals/
  req.body.userId = req.user._id
  const newMeal = new Meal(req.body)
  newMeal.save((err, savedMeal) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedMeal)
  })
})



// Delete Meal
mealRouter.delete("/:mealId", (req, res, next) => {
    //http://localhost:9000/api/meals/234729837482
  Meal.findOneAndDelete(
    { _id: req.params.mealId, userId: req.user._id },
    (err, deletedMeal) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted meal!`)
    }
  )
})


// Update Meal
mealRouter.put("/:mealId", (req, res, next) => {
    //http://localhost:9000/api/meals/234729837482
  console.log(req.body)
  console.log(req.params.mealId)
  Meal.findOneAndUpdate(
    { _id: req.params.mealId },
    req.body,
    { new: true },
    (err, updatedMeal) => {
      if(err){
        res.status(500)
        return next(err)
      }
      console.log(updatedMeal)
      return res.status(201).send(updatedMeal)
    }
  )
})

//Likes
mealRouter.put("/likes/:mealId", (req, res, next) => {
  //http://localhost:9000/api/meals/likes/234729837482
 console.log(req.user._id)
  Meal.findOneAndUpdate(
    { _id: req.params.mealId, userId: req.body.userId },
     //look up $inc mongo method, look up populate
    { new: false},
    (err, updatedMeal) => {
      if(err){
        res.status(500)
        return next(err)
      }
      
      !updatedMeal.likers.includes(req.user._id) && !updatedMeal.dislikers.includes(req.user._id)?
      Meal.findOneAndUpdate(
        { _id: req.params.mealId, userId: req.body.userId },
        //$inc increments likesm $push pushes into likers
        {$inc: {likes: 1}, $push: {likers: req.user._id }  }, //look up $inc mongo method, look up populate
        { new: true },
        (err, updatedMeal) => {
          if(err){
            res.status(500)
            return next(err)
          } 
            return  res.status(201).send(updatedMeal)

        }
      ): 
       next(new Error("You already liked or disliked this meal sorry!"))
      
    }
  )
})


//Dislike
mealRouter.put("/dislikes/:mealId", (req, res, next) => {
   //http://localhost:9000/api/meals/dislikes/234729837482
  Meal.findOneAndUpdate(
    { _id: req.params.mealId, userId: req.body.userId },
     //look up $inc mongo method
    { new: false },
    (err, updatedMeal) => {
      if(err){
        res.status(500)
        return next(err)
      }
      console.log(updatedMeal)
       

      !updatedMeal.likers.includes(req.user._id) && !updatedMeal.dislikers.includes(req.user._id)?

      Meal.findOneAndUpdate(
        { _id: req.params.mealId, userId: req.body.userId },
        {$inc: {dislikes: 1}, $push: {dislikers: req.user._id }  }, // $inc mongo method. dislikers array is a property of meal. $push is pushing req.user_id into dislikers array for this specific meal.
        { new: true },
        (err, updatedMeal) => {
          if(err){
            res.status(500)
            return next(err)
          } 
            return  res.status(201).send(updatedMeal)

        }
      )
      :
       next(new Error("You already liked or disliked this meal sorry!"))

    }
  )
})



module.exports = mealRouter;
//this replaced issueRouter 