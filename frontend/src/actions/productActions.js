import axios from 'axios'
import * as actionTypes from '../constants/productConstants'

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.PRODUCT_LIST_REQUEST })
    const { data } = await axios.get('/api/products')

    dispatch({
      type: actionTypes.PRODUCT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.PRODUCT_DETAILS_REQUEST })
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
      type: actionTypes.PRODUCT_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createProductReview = (productId, review) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: actionTypes.PRODUCT_CREATE_REVIEWS_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.post(`/api/products/${productId}/reviews`, review, config)

    dispatch({
      type: actionTypes.PRODUCT_CREATE_REVIEWS_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.PRODUCT_CREATE_REVIEWS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
