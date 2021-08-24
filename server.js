const express = require('express')
const PORT = process.env.PORT || 9000
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')


app.use(morgan("dev"))
app.use(express.json())

mongoose.connect(
  process.env.MONGODB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    },
    () => console.log('Connected to the DB')
  )
  app.use('/auth', require('./routes/authRouter.js'))
  app.use('/api', expressJwt({ secret: process.env.SECRET, algorithms: ['HS256']})) 
  // req.user// Middleware. checking if token is valid in postman (under bearer section in postman)
  app.use('/api/meals', require('./routes/mealRouter.js'))
  app.use('/api/users', require('./routes/userRouter.js'))
  app.use('/api/comments', require('./routes/commentRouter.js'))

 

  app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
      res.status(err.status)
    }
    return res.send({errMsg: err.message})
  })

  // if (process.env.NODE_ENV === 'production' ) { app.use(express.static('client/build)) }

  app.use(express.static(path.join(__dirname, "client", "build")))

app.get("*", (req, res) => {
    res.sendFile(path.join, (__dirname, "client", "build", "index.html"))
})


  app.listen(PORT, () => {
    console.log(`Server is running on local port 9000`)
  })






