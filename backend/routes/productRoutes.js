import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
} from '../controllers/productController.js'

//@desc Fetch all products
//@route GET /api/products
//@access Public
router.route('/').get(getProducts)

//@desc Fetch single product
//@route GET /api/product/:id
//@access Public
router.route('/:id').get(getProductById)

export default router
