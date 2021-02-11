import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
  {
    name: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'User',
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
      },
    ],
    shippingAddress: {
      address: { type: String, requirec: true },
      city: { type: String, requirec: true },
      postalCode: { type: String, requirec: true },
      country: { type: String, requirec: true },
    },
    paymentMethod: {
      type: String,
      require: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      emailaddress: { type: String },
    },
    taxPrice: {
      type: String,
      require: true,
      default: 0.0,
    },
    shippingPrice: {
      type: String,
      require: true,
      default: 0.0,
    },
    totalPrice: {
      type: String,
      require: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      require: true,
      default: false,
    },
    PaidAt: {
      type: Boolean,
      require: true,
      default: false,
    },
    delevierAt: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
)

const Order = mongoose.model('order', orderSchema)

export default Order
