import express from 'express'
import routeNotFound from './middlewares/route_not_found.js'
import errorHandler from './middlewares/error_handler.js'
import requestLogger from './middlewares/request_logger.js'
import rootRoute from './routes/index.js'

const app = express()
app.use(requestLogger)
app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.static('public'))
app.get('/', rootRoute)

app.use(routeNotFound)
app.use(errorHandler)
export default app
