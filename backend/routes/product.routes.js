import express from 'express'
import { getKey } from '../controller/product.controller.js'

const router = express.Router()
router.route('/payment/process').post(processPayments)
router.route("getKey").get(getKey)

export default router