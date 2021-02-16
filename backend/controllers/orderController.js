import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

//@desc Create new orders
//@route Post /api/orders
//@access Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body

  res.json(products)
})
