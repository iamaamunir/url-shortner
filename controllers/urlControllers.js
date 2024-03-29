import { nanoid } from "nanoid"
import Url from "../models/urlModel.js"
import validateUrl from "../utils/utils.js"
import CONFIG from "../config/config.js"
import User from "../models/userModel.js"
import APIFeatures from "../utils/apiFeatures.js"
import AppError from "../utils/appError.js"

const generateUrl = async function (req, res, next) {
  const originalUrl = req.body.originalUrl
  const base = CONFIG.BASE

  const urlId = nanoid()
  if (validateUrl(originalUrl)) {
    try {
      const user = await User.findById(req.user.id)
      let urlDetails = await Url.findOne({ originalUrl })
      if (urlDetails) {
        res.json(urlDetails)
      } else {
        const shortUrl = `${base}/${urlId}`

        urlDetails = new Url({
          originalUrl,
          shortUrl,
          urlId,
          date: new Date(),
          owner: req.user.id,
        })

        const savedUrl = await urlDetails.save()
        user.urls = user.urls.concat(savedUrl._id)
        await user.save()
        res.status(201).json({
          status: "success",
          data: { urlDetails },
        })
      }
    } catch (err) {
      res.status(500).json("Server Error")
      next(err)
    }
  } else {
    res.status(400).json("Invalid Original Url")
  }
}

const viewUrls = async function (req, res, next) {
  try {
    const currentUserId = req.user.id
    const features = new APIFeatures(
      Url.find({ owner: currentUserId }),
      req.query
    )
      .sort()
      .paginate()
    const urls = await features.query
    if (!urls) {
      return res.statusCode(400).send("url not found")
    }
    res.status(200).json({
      status: "success",
      results: urls.length,
      data: {
        urls,
      },
    })
  } catch (err) {
    next(err)
  }
}

const getUrl = async function (req, res, next) {
  try {
    const url = await Url.findOne({ urlId: req.params.id })
    if (url) {
      await Url.updateOne(
        {
          urlId: req.params.id,
        },
        { $inc: { clicks: 1 } }
      )
      return res.redirect(url.originalUrl)
    } else res.status(404).json("Not found")
  } catch (err) {
    res.status(500).json("Server Error")
  }
}

const updateUrl = async function (req, res, next) {
  try {
    const body = req.body
    const id = req.params.id
    const url = await Url.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    })
    if (!url) {
      return next(new AppError("Note Not Found", 404))
    }
    url.date = Date.now()
    url.save()
    return res.status(204).json({
      status: "success",
      message: "Update Successfull",
    })
  } catch (err) {
    next(err)
  }
}

const deleteUrl = async function (req, res, next) {
  try {
    const id = req.params.id

    const url = await Url.findByIdAndDelete(id)
    if (!url) {
      return next(new AppError("Note Not Found", 404))
    }
    return res.status(204).json({
      status: "success",
      message: "Deleted Successfully",
    })
  } catch (err) {
    next(err)
  }
}

export default { generateUrl, viewUrls, updateUrl, deleteUrl, getUrl }
