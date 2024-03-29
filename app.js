import express from 'express'
import urlRouter from './routes/urlRoutes.js'
import userRouter from './routes/userRoutes.js'
import AppError from './utils/appError.js'
import errorHandler from './middleware/errorHandler.js'
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
app.use("/api", userRouter)


app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404))
})

app.use(errorHandler.errorHandler)

export default app
