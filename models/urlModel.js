import mongoose from "mongoose"
const UrlSchema =  mongoose.Schema({
  urlId: {
    type: String,
    required: true,
  },
  clicks: {
    type: Number,
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

const Url = mongoose.model("Url", UrlSchema)
export default Url
