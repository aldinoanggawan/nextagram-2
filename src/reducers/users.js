import * as actionTypes from '../actions/actionTypes'

const initialState = {
  isLoading: false,
  data: [],
  error: '',
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case actionTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default users
