import {
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
} from '../actions/actionTypes'

const initialState = {
  isLoading: false,
  images: [],
  error: '',
}

const images = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        images: action.payload,
      }
    case FETCH_IMAGES_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default images
