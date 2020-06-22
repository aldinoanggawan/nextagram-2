import * as actionTypes from '../actions/actionTypes'

const initialState = {
  isLoading: false,
  image_url: null,
  success: false,
  error: '',
}

const post = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_IMAGE_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.POST_IMAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        image_url: action.payload.image_url,
        success: action.payload.success,
      }
    case actionTypes.POST_IMAGE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default post
