import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserProfileImages, cleanupProfile } from '../actions'

const useFetchProfileImages = userId => {
  const profileImages = useSelector(state => state.profile.images)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserProfileImages(userId))
    return () => {
      dispatch(cleanupProfile())
    }
  }, [dispatch, userId])

  return profileImages
}

export default useFetchProfileImages
