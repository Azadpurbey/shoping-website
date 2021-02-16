// import {
//   USER_LOGIN_REQUEST,
//   USER_LOGIN_SUCCESS,
//   USER_LOGIN_FAIL,
//   USER_LOGOUT,
//   USER_REGISTER_REQUEST,
//   USER_REGISTER_SUCCESS,
//   USER_REGISTER_FAIL,
//   USER_DETAILS_REQUEST,
//   USER_DETAILS_SUCCESS,
//   USER_DETAILS_FAIL,
// } from '../constants/userConstants'

import * as actionType from '../constants/userConstants'

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case actionType.USER_LOGIN_REQUEST:
      return { loading: true }

    case actionType.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case actionType.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case actionType.USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case actionType.USER_REGISTER_REQUEST:
      return { loading: true }
    case actionType.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case actionType.USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case actionType.USER_DETAILS_REQUEST:
      return { ...state, loading: true }
    case actionType.USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload }
    case actionType.USER_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case actionType.USER_UPDATE_PROFILE_REQUEST:
      return { loading: true }
    case actionType.USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload }
    case actionType.USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload }
    case actionType.USER_UPDATE_PROFILE_RESET:
      return {}
    default:
      return state
  }
}
