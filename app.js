import express from 'express'
const CONFIG = require("./config/config")

const app = express()

const NODE_ENV = CONFIG.NODE_ENV

app.use(express.json())
// if (NODE_ENV === "development") {
//   app.use(morgan("dev"))
// }
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to URL-SHORTNER Homepage",
  })
})


// app.all("*", (req, res, next) => {
//   next(new AppError(`Can't find ${req.originalUrl} on this server`, 404))
// })

// app.use(errorHandler.errorHandler)

module.exports = app
