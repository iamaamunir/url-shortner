import dotenv from "dotenv"
dotenv.config()

const CONFIG = {
  PORT: process.env.PORT,
  MONGODB_URL: process.env.MONGODB_URL,
  BASE: process.env.BASE,
  TOKEN_KEY : process.env.TOKEN_KEY
}
export default CONFIG
