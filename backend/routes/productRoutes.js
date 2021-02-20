import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
  createProductReview,
} from '../controllers/productController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').get(getProducts)

router.route('/:id').get(getProductById)

router.route('/:id/reviews').post(protect, createProductReview)

export default router
