import mongoose from "mongoose"
const UrlSchema = mongoose.Schema({
  urlId: {
    type: String,
    required: true,
  },
  clicks: {
    type: number,
    required: true,
    default: 0,
  },
  originalUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true
  },
  date:{
    type: String,
    required: true
  }
})

module.exports = mongoose.model("Url", UrlSchema)