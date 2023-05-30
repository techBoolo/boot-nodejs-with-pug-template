import express from 'express'
import rootController from '../controllers/index.js'

const router = express.Router()

router.route('/')
  .get(rootController.index)

export default router
