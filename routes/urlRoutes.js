import express from "express"
import generateUrl from "../controllers/urlControllers.js"
import viewUrls from "../controllers/urlControllers.js"
import verifyToken from "../middleware/auth.js"
import updateUrl from "../controllers/urlControllers.js"
import deleteUrl from "../controllers/urlControllers.js"
import getUrl from "../controllers/urlControllers.js"
const urlRouter = express.Router()

urlRouter.route("/short").post(verifyToken, generateUrl.generateUrl)
urlRouter.route("/urls").get(verifyToken, viewUrls.viewUrls)
urlRouter
  .route("/:id")
  .patch(verifyToken, updateUrl.updateUrl)
  .delete(verifyToken, deleteUrl.deleteUrl)
  .get( getUrl.getUrl)

export default urlRouter
