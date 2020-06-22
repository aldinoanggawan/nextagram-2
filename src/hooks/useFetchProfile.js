import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserProfile, cleanupProfile } from '../actions'

const useFetchProfile = userId => {
  const profileState = useSelector(state => state.profile)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserProfile(userId))
    return () => {
      dispatch(cleanupProfile())
    }
  }, [dispatch, userId])

  return profileState
}

export default useFetchProfile
