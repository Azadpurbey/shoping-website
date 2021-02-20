import React from 'react'
import * as actionTypes from '../constants/productConstants'

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_LIST_REQUEST:
      return { loading: true }
    case actionTypes.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload }
    case actionTypes.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case actionTypes.PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state }
    case actionTypes.PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload }
    case actionTypes.PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_CREATE_REVIEWS_REQUEST:
      return { loading: true }
    case actionTypes.PRODUCT_CREATE_REVIEWS_SUCCESS:
      return { loading: false, success: true }
    case actionTypes.PRODUCT_CREATE_REVIEWS_FAIL:
      return { loading: false, error: action.payload }
    case actionTypes.PRODUCT_CREATE_REVIEWS_RESET:
      return {}
    default:
      return state
  }
}
