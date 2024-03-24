
import { nanoid } from "nanoid"
import Url  from "../models/urlModel.js"
import validateUrl  from "../utils/utils.js"
import CONFIG from "../config/config.js"

const generateUrl = async function (req, res) {
  const originalUrl = req.body.originalUrl
  console.log(originalUrl)
  const base = CONFIG.BASE

  const urlId = nanoid()
  if (validateUrl(originalUrl)) {
  try {
      let url = await Url.findOne({ originalUrl })
      if (url) {
        res.json(url)
      } else {
        const shortUrl = `${base}/${urlId}`

        url = new Url({
          originalUrl,
          shortUrl,
          urlId,
          date: new Date(),
        })

        await url.save()
        res.json(url)
      }
    } catch (err) {
      console.log(err)
      res.status(500).json("Server Error")
    }
  } else {
    res.status(400).json("Invalid Original Url")
  }
}

export default generateUrl
