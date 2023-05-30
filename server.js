import http from 'node:http'

const PORT = process.env.PORT || 3001
const server = http.createServer()

server.on('request', (req, res) => {

  res.end('it works')
})

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
