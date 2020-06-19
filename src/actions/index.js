import Axios from 'axios'
import { push } from 'connected-react-router'

import * as actionTypes from './actionTypes'
import { toast } from 'react-toastify'

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

const loginRequest = () => ({
  type: actionTypes.LOGIN_REQUEST,
})

const loginSuccess = token => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: token,
})

const loginFailure = error => ({
  type: actionTypes.LOGIN_FAILURE,
  payload: error,
})

export const login = cred => {
  return async dispatch => {
    dispatch(loginRequest())
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    }
    try {
      const { data } = await Axios.post(
        `https://insta.nextacademy.com/api/v1/login`,
        cred,
        config
      )
      localStorage.setItem('auth_token', data.auth_token)
      dispatch(loginSuccess(data))
      toast.success(data.message)
      dispatch(push(`/users/${data.user.id}`))
    } catch (error) {
      const { message } = error.response.data
      dispatch(loginFailure(message))
      toast.warn(message)
    }
  }
}

const logoutRequest = () => ({
  type: actionTypes.LOGOUT_REQUEST,
})

const logoutSuccess = () => ({
  type: actionTypes.LOGOUT_SUCCESS,
})

const logoutFailure = error => ({
  type: actionTypes.LOGOUT_FAILURE,
  payload: error,
})

export const logout = () => {
  return dispatch => {
    dispatch(logoutRequest())
    try {
      localStorage.removeItem('auth_token')
      dispatch(logoutSuccess())
      toast.success('Successfully signed out.')
      dispatch(push('/'))
    } catch (error) {
      const errorMsg = error.message
      dispatch(logoutFailure(errorMsg))
    }
  }
}
