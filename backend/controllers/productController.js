import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

//@desc Fetch all products
//@route GET /api/products
//@access Public
export const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  // search box implementation ****
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}
  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })
})

//@desc Fetch single product
//@route GET /api/products/:id
//@access Public
export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

//@desc Delete a product
//@route DELETE /api/products/:id
//@access Private/Admin
export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    await product.remove()
    res.json({ message: 'Product is Deleted' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

//@desc Create a product
//@route POST /api/products
//@access Private/Admin
export const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  })
  const newProduct = await product.save()
  res.status(201).json(newProduct)
})

//@desc Update a product
//@route PUT /api/products/:id
//@access Private/Admin
export const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    image,
    brand,
    category,
    countInStock,
    description,
  } = req.body

  const product = await Product.findById(req.params.id)
  if (product) {
    ;(product.name = name),
      (product.price = price),
      (product.brand = brand),
      (product.category = category),
      (product.countInStock = countInStock),
      (product.description = description),
      (product.image = image)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }

  const updatedProduct = await product.save()
  res.status(201).json(updatedProduct)
})

//@desc Create new review
//@route POST /api/product/:id/reviews
//@access Private
export const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body
  const product = await Product.findById(req.params.id)

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    )
    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Product already reviewed')
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    }
    product.reviews.push(review)
    product.numReviews = product.reviews.length
    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length

    await product.save()
    res.status(201).json({ message: 'Review added' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

//@desc GET top Products
//@route GET /api/product/top
//@access Public
export const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3)
  res.json(products)
})
