import * as actionTypes from './actionTypes'
import Axios from 'axios'

const fetchUsersRequest = () => ({
  type: actionTypes.FETCH_USERS_REQUEST,
})

const fetchUsersSuccess = data => ({
  type: actionTypes.FETCH_USERS_SUCCESS,
  payload: data,
})

const fetchUsersFailure = error => ({
  type: actionTypes.FETCH_USERS_FAILURE,
  payload: error,
})

export const fetchUsers = () => {
  return async dispatch => {
    dispatch(fetchUsersRequest())
    try {
      const { data } = await Axios.get(
        `https://insta.nextacademy.com/api/v1/users`
      )
      dispatch(fetchUsersSuccess(data))
    } catch ({ message }) {
      dispatch(fetchUsersFailure(message))
    }
  }
}

const fetchUserProfileRequest = () => ({
  type: actionTypes.FETCH_USER_PROFILE_REQUEST,
})

const fetchUserProfileSuccess = data => ({
  type: actionTypes.FETCH_USER_PROFILE_SUCCESS,
  payload: data,
})

const fetchUserProfileFailure = error => ({
  type: actionTypes.FETCH_USER_PROFILE_FAILURE,
  payload: error,
})

export const fetchUserProfile = id => {
  return async dispatch => {
    dispatch(fetchUserProfileRequest())
    try {
      const { data } = await Axios.get(
        `https://insta.nextacademy.com/api/v1/users/${id}`
      )
      dispatch(fetchUserProfileSuccess(data))
    } catch ({ message }) {
      dispatch(fetchUserProfileFailure(message))
    }
  }
}

const fetchUserProfileImagesRequest = () => ({
  type: actionTypes.FETCH_USER_PROFILE_IMAGES_REQUEST,
})

const fetchUserProfileImagesSuccess = data => ({
  type: actionTypes.FETCH_USER_PROFILE_IMAGES_SUCCESS,
  payload: data,
})

const fetchUserProfileImagesFailure = error => ({
  type: actionTypes.FETCH_USER_PROFILE_IMAGES_FAILURE,
  payload: error,
})

export const fetchUserProfileImages = id => {
  return async dispatch => {
    dispatch(fetchUserProfileImagesRequest())
    try {
      const { data } = await Axios.get(
        `https://insta.nextacademy.com/api/v2/images?userId=${id}`
      )
      dispatch(fetchUserProfileImagesSuccess(data))
    } catch ({ message }) {
      dispatch(fetchUserProfileImagesFailure(message))
    }
  }
}

export const cleanupProfile = () => ({
  type: actionTypes.CLEANUP_PROFILE,
})
