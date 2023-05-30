import ErrorResponse from '../utils/error_response.js'

export default (req, res, next) => {
  const error = new ErrorResponse({ 
    message: 'Route not found.', 
    statusCode: 404 
  })
  next(error)
}
