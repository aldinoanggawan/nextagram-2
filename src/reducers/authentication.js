import * as actionTypes from '../actions/actionTypes'

const initialState = {
  isLoggedIn: localStorage.getItem('auth_token') ? true : false,
  isLoading: false,
  authId: localStorage.getItem('id') ? localStorage.getItem('id') : null,
  message: '',
  error: '',
}

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_REQUEST:
    case actionTypes.LOGIN_REQUEST:
    case actionTypes.LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.REGISTER_SUCCESS:
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        authId: action.payload.user.id,
        message: action.payload.message,
      }
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
      }
    case actionTypes.REGISTER_FAILURE:
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
