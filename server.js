// const http = require("http")
import http from 'http'
import app from './app.js'
// const app = require("./app")

import config from './config/config.js'

const PORT = config.PORT || 5000

import connectToDb from './db/db.js'
connectToDb()

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server is listening at port: ${PORT}`)
})
