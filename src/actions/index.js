import Axios from 'axios'
import { push } from 'connected-react-router'

import * as actionTypes from './actionTypes'
import { toast } from 'react-toastify'

export const cleanupProfile = () => ({
  type: actionTypes.CLEANUP_PROFILE,
})

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

const fetchUserProfileCommentsRequest = () => ({
  type: actionTypes.FETCH_USER_PROFILE_COMMENTS_REQUEST,
})

const fetchUserProfileCommentsSuccess = data => ({
  type: actionTypes.FETCH_USER_PROFILE_COMMENTS_SUCCESS,
  payload: data,
})

const fetchUserProfileCommentsFailure = error => ({
  type: actionTypes.FETCH_USER_PROFILE_COMMENTS_FAILURE,
  payload: error,
})

export const fetchUserProfileComments = imageId => {
  return async dispatch => {
    dispatch(fetchUserProfileCommentsRequest())
    const auth_token = localStorage.getItem('auth_token')
    const config = {
      headers: {
        Authorization: `Bearer ${auth_token}`,
      },
    }
    try {
      const { data } = await Axios.get(
        `https://insta.nextacademy.com/api/v1/images/${imageId}/comments`,
        config
      )
      dispatch(fetchUserProfileCommentsSuccess(data))
    } catch ({ message }) {
      dispatch(fetchUserProfileCommentsFailure(message))
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
      const { auth_token, message, user } = await data
      localStorage.setItem('id', user.id)
      localStorage.setItem('auth_token', auth_token)
      dispatch(loginSuccess(data))
      toast.success(message)
      dispatch(push(`/users/${user.id}`))
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
      localStorage.removeItem('id')
      dispatch(logoutSuccess())
      toast.success('Successfully signed out.')
      dispatch(push('/'))
    } catch (error) {
      const errorMsg = error.message
      dispatch(logoutFailure(errorMsg))
    }
  }
}

const postCommentRequest = () => ({
  type: actionTypes.POST_COMMENT_REQUEST,
})

const postCommentSuccess = response => ({
  type: actionTypes.POST_COMMENT_SUCCESS,
  payload: response,
})

const postCommentFailure = error => ({
  type: actionTypes.POST_COMMENT_FAILURE,
  payload: error,
})

export const postComment = (content, imageId) => {
  return async dispatch => {
    dispatch(postCommentRequest())
    const auth_token = localStorage.getItem('auth_token')
    const config = {
      headers: {
        Authorization: `Bearer ${auth_token}`,
        'Content-Type': 'application/json',
      },
    }
    try {
      const { data } = await Axios.post(
        `https://insta.nextacademy.com/api/v1/images/${imageId}/comments`,
        content,
        config
      )
      dispatch(postCommentSuccess(data))
      toast.success('Comment added successfully')
      dispatch(fetchUserProfileComments(imageId))
    } catch (error) {
      const errorResponse = error.response.data
      dispatch(postCommentFailure(errorResponse))
    }
  }
}

const postImageRequest = () => ({
  type: actionTypes.POST_IMAGE_REQUEST,
})

const postImageSuccess = response => ({
  type: actionTypes.POST_IMAGE_SUCCESS,
  payload: response,
})

const postImageFailure = error => ({
  type: actionTypes.POST_IMAGE_FAILURE,
  payload: error,
})

export const postImage = formData => {
  return async dispatch => {
    dispatch(postImageRequest())
    const auth_token = localStorage.getItem('auth_token')
    const id = localStorage.getItem('id')
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${auth_token}`,
        'Content-Type': 'multipart/form-data',
      },
    }
    try {
      const { data } = await Axios.post(
        'https://insta.nextacademy.com/api/v1/images/',
        formData,
        config
      )
      dispatch(postImageSuccess(data))
      toast.success('Photo uploaded successfully')
      dispatch(fetchUserProfileImages(id))
    } catch (error) {
      const errorMsg = error.message
      dispatch(postImageFailure(errorMsg))
    }
  }
}

const registerRequest = () => ({
  type: actionTypes.REGISTER_REQUEST,
})

const registerSuccess = response => ({
  type: actionTypes.REGISTER_SUCCESS,
  payload: response,
})

const registerFailure = error => ({
  type: actionTypes.REGISTER_FAILURE,
  payload: error,
})

export const registerAccount = cred => {
  return async dispatch => {
    dispatch(registerRequest())
    const config = {
      'Content-Type': 'application/json',
    }
    try {
      const { data } = await Axios.post(
        'https://insta.nextacademy.com/api/v1/users/',
        cred,
        config
      )
      const { auth_token, message, user } = await data
      localStorage.setItem('id', user.id)
      localStorage.setItem('auth_token', auth_token)
      dispatch(registerSuccess(data))
      toast.success(message)
      dispatch(push(`/users/${user.id}`))
    } catch (error) {
      const errorArray = await error.response.data.message
      errorArray.map(error => toast.error(error, { autoClose: 5000 }))
      dispatch(registerFailure(errorArray))
    }
  }
}
