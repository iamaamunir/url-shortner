import express from 'express'
import generateUrl from '../controllers/urlControllers.js'
const urlRouter = express.Router()

urlRouter.route('/short').post(generateUrl)

export default urlRouter
