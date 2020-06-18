import * as actionTypes from '../actions/actionTypes'

const initialState = {
  isLoggedIn: localStorage.getItem('auth_token') ? true : false,
  isLoading: false,
  message: '',
  error: '',
}

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
    case actionTypes.LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        message: action.payload.message,
      }
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
      }
    case actionTypes.LOGIN_FAILURE:
    case actionTypes.LOGOUT_FAILURE:
      return {
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default authentication
