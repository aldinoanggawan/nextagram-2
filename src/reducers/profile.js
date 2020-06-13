import * as actionTypes from '../actions/actionTypes'

const initialState = {
  isLoading: false,
  data: {},
  images: {
    isLoading: false,
    data: [],
  },
  error: '',
}

const profile = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.FETCH_USER_PROFILE_IMAGES_REQUEST:
      return {
        ...state,
        images: {
          ...state.images,
          isLoading: true,
        },
      }
    case actionTypes.FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case actionTypes.FETCH_USER_PROFILE_IMAGES_SUCCESS:
      return {
        ...state,
        images: {
          ...state.images,
          isLoading: false,
          data: action.payload,
        },
      }
    case actionTypes.FETCH_USER_PROFILE_IMAGES_FAILURE:
    case actionTypes.FETCH_USER_PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    case actionTypes.CLEANUP_PROFILE:
      return {
        ...state,
        ...initialState,
      }
    default:
      return state
  }
}

export default profile
