import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserProfileImages, cleanupProfile } from '../actions'

const useFetchProfileImages = id => {
  const profileImages = useSelector(state => state.profile.images)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserProfileImages(id))
    return () => {
      dispatch(cleanupProfile())
    }
  }, [dispatch, id])

  return profileImages
}

export default useFetchProfileImages
