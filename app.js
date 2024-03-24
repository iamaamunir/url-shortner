// const express = require("express")
import express from 'express'
import CONFIG from './config/config.js'
import urlRouter from './routes/urlRoutes.js'
const app = express()

// const NODE_ENV = CONFIG.NODE_ENV

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to URL-SHORTNER Homepage",
  })
})

app.use('/api', urlRouter)


// app.all("*", (req, res, next) => {
//   next(new AppError(`Can't find ${req.originalUrl} on this server`, 404))
// })

// app.use(errorHandler.errorHandler)

export default app
