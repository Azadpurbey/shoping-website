import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()
import {
  addOrderItems,
  getOrderbyId,
  updateOrderToPaid,
  getMyOrders,
} from '../controllers/orderController.js'

router.route('/').post(protect, addOrderItems)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderbyId)
router.route('/:id/pay').put(protect, updateOrderToPaid)

export default router