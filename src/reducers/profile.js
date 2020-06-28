import * as actionTypes from '../actions/actionTypes'

const initialState = {
  isLoading: false,
  data: {},
  error: '',
  comments: {
    isLoading: false,
    data: [],
    error: '',
  },
  images: {
    isLoading: false,
    data: [],
    error: '',
  },
  likes: {
    isLoading: false,
    data: [],
    error: '',
  },
}

const profile = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.FETCH_USER_PROFILE_COMMENTS_REQUEST:
      return {
        ...state,
        comments: {
          ...state.comments,
          isLoading: true,
        },
      }
    case actionTypes.FETCH_USER_PROFILE_IMAGE_LIKES_REQUEST:
      return {
        ...state,
        likes: {
          ...state.likes,
          isLoading: true,
        },
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
    case actionTypes.FETCH_USER_PROFILE_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: {
          ...state.comments,
          isLoading: false,
          data: action.payload.sort((a, b) => a.id - b.id),
        },
      }
    case actionTypes.FETCH_USER_PROFILE_IMAGE_LIKES_SUCCESS:
      return {
        ...state,
        likes: {
          ...state.likes,
          isLoading: false,
          data: action.payload,
        },
      }
    case actionTypes.FETCH_USER_PROFILE_IMAGES_SUCCESS:
      return {
        ...state,
        images: {
          ...state.images,
          isLoading: false,
          data: action.payload.sort((a, b) => b.id - a.id),
        },
      }
    case actionTypes.FETCH_USER_PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    case actionTypes.FETCH_USER_PROFILE_COMMENTS_FAILURE:
      return {
        ...state,
        comments: {
          ...state.comments,
          isLoading: false,
          error: action.payload,
        },
      }
    case actionTypes.FETCH_USER_PROFILE_IMAGE_LIKES_FAILURE:
      return {
        ...state,
        likes: {
          ...state.likes,
          isLoading: false,
          error: action.payload,
        },
      }
    case actionTypes.FETCH_USER_PROFILE_IMAGES_FAILURE:
      return {
        ...state,
        images: {
          ...state.images,
          isLoading: false,
          error: action.payload,
        },
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
