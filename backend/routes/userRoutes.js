import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()
import {
  authUser,
  registerUser,
  getUserProfile,
} from '../controllers/userController.js'

router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)

export default router
