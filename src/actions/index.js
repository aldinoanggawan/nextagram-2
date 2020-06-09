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
