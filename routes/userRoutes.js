import express from "express"
const userRouter = express.Router()

import signup from "../controllers/authController.js"
import login from "../controllers/authController.js"

userRouter.route("/signup").post(signup.signup)
userRouter.route("/login").post(login.login)

export default userRouter
