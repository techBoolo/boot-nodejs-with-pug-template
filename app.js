import express from 'express'
import routeNotFound from './middlewares/route_not_found.js'
import errorHandler from './middlewares/error_handler.js'

const app = express()
app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.static('public'))
app.get('/', async (req, res) => {
  res.render('index')
})

app.use(routeNotFound)
app.use(errorHandler)
export default app
