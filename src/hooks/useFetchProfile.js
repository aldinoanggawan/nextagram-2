import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserProfile, cleanupProfile } from '../actions'

const useFetchProfile = id => {
  const profileState = useSelector(state => state.profile)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserProfile(id))
    return () => {
      dispatch(cleanupProfile())
    }
  }, [dispatch, id])

  return profileState
}

export default useFetchProfile
