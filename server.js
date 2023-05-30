import http from 'node:http'
import app from './app.js'
import connectDB from './config/db.js'

const PORT = process.env.PORT || 3001
const server = http.createServer()

server.on('request', app)

connectDB()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    })
  })
