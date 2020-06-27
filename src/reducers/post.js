import * as actionTypes from '../actions/actionTypes'

const initialState = {
  image: {
    isLoading: false,
    image_url: null,
    success: false,
    error: '',
  },
  comment: {
    isLoading: false,
    success: false,
  },
}

const post = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_COMMENT_REQUEST:
      return {
        ...state,
        comment: {
          ...state.comment,
          isLoading: true,
          success: false,
        },
      }
    case actionTypes.POST_IMAGE_REQUEST:
      return {
        ...state,
        image: {
          ...state.image,
          isLoading: true,
        },
      }
    case actionTypes.POST_COMMENT_SUCCESS:
      return {
        ...state,
        comment: {
          ...state.comment,
          isLoading: false,
          success: true,
        },
      }
    case actionTypes.POST_IMAGE_SUCCESS:
      return {
        ...state,
        image: {
          ...state.image,
          isLoading: false,
          image_url: action.payload.image_url,
          success: action.payload.success,
        },
      }
    case actionTypes.POST_COMMENT_FAILURE:
      return {
        ...state,
        comment: {
          ...state,
          isLoading: false,
          success: false,
        },
      }
    case actionTypes.POST_IMAGE_FAILURE:
      return {
        ...state,
        image: {
          ...state.image,
          isLoading: false,
          error: action.payload,
        },
      }
    default:
      return state
  }
}

export default post
