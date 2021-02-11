// const express = require('express')
// const dotenv = require('dotenv')
// const products = require('./data/products.js')

import express from 'express'
// import dotenv from 'dotenv'
// import colors from 'colors'
// import connectDB from './config/db.js'
import products from './data/products.js'
const app = express()

app.get('/', (req, res) => {
  res.send('API is running....')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

// const PORT = process.env.PORT || 5000

// app.listen(
//   PORT,
//   console.log(
//     `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
//   )
// )

app.listen(5000, console.log('server is running on port 5000'))
