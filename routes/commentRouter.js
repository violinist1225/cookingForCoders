const express = require("express");
const commentRouter = express.Router();
const Comment = require("../models/comment.js");


// Get All comment
commentRouter.get("/", (req, res, next) => {
  Comment.find((err, comments) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(comments)
  })
})


commentRouter.post("/", (req, res, next) => {
  // req.body.userId = req.user._id
  const newComment = new Comment(req.body)
  newComment.save((err, savedComment) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedComment)
  })
})

// Delete comment
commentRouter.delete("/:commentId", (req, res, next) => {
  Comment.findOneAndDelete(
    { _id: req.params.commentId, userId: req.user._id },
    (err, deletedComment) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted comment!`)
    }
  )
})

// Update comment
commentRouter.put("/:commentId", (req, res, next) => {
  console.log(req.body)
  Comment.findOneAndUpdate(
    { _id: req.params.commentId, userId: req.body.userId },
    req.body,
    { new: true },
    (err, updatedComment) => {
      if(err){
        res.status(500)
        return next(err)
      }
      console.log(updatedComment)
      return res.status(201).send(updatedComment)
    }
  )
})



module.exports = commentRouter