import {
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
} from './actionTypes'
import Axios from 'axios'

export const fetchImagesRequest = () => ({
  type: FETCH_IMAGES_REQUEST,
})

const fetchImagesSuccess = images => ({
  type: FETCH_IMAGES_SUCCESS,
  payload: images,
})

const fetchImagesFailure = error => ({
  type: FETCH_IMAGES_FAILURE,
  payload: error,
})

export const fetchImages = () => {
  return async dispatch => {
    dispatch(fetchImagesRequest())
    try {
      const response = await Axios.get(
        'https://picsum.photos/v2/list?page=2&limit=10'
      )
      const images = await response.data
      dispatch(fetchImagesSuccess(images))
    } catch (error) {
      const errorMsg = error.message
      dispatch(fetchImagesFailure(errorMsg))
    }
  }
}
