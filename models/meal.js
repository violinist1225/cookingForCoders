const mongoose = require("mongoose")

const Schema = mongoose.Schema;


const mealSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    timeToPrepareInMinutes:{
        type: String,
        required: false
    },
    timeToCookInMinutes:{
        type: String,
        required: false
    },
    durationOfMealPerCoderInDays:{
        type: String,
        required: false
    },

    description: {
        type: String,
        reqired: true
    },
    imageUrl:{
        type: String,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    likes: {
        type: Number,
        default: 0

    },
    dislikes: {
        type: Number,
        default: 0
    },
    likers: {
        type: Array
    },
    dislikers: {
        type: Array
    }
})
   




module.exports = mongoose.model("Meal", mealSchema); 