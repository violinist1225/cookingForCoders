const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        reqired: true
    }
,
    memberSince:{
        type: Date,
        default: Date.now 
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})
    //presave hook to encrypt your passwords on signup 
    userSchema.pre("save", function(next){  
        const user = this  
        if(!user.isModified("password")) return next()
        bcrypt.hash(user.password, 10, (err, hash) =>{
            if(err) return next(err)
            user.password = hash
            next()
            
    })
    })
//method to check encrypted message on login

userSchema.methods.checkPassword = function(passwordAttempt, callBack){
    //console.log(passwordAttempt)
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if(err) return callBack(err)
        return callBack(null, isMatch)

    })
}

//method to remove user's password for token/sending the response
userSchema.methods.withoutPassword = function(){
    const user = this.toObject()
    delete user.password
    return user 
}


    




module.exports = mongoose.model("User", userSchema); 