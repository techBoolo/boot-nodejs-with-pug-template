import requestTime from '../utils/current_date_time.js'

export default (req, res, next) => {
  console.log(req.method, req.url, requestTime());
  next()
}
