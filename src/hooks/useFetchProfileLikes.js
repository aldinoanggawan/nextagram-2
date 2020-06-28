import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfileImageLikes } from '../actions'

const useFetchProfileLikes = () => {
  const likesState = useSelector(state => state.profile.likes)
  const likesIsLoading = likesState.isLoading
  const likesData = likesState.data
  const dispatch = useDispatch()

  const fetchProfileLikes = imageId => {
    dispatch(fetchUserProfileImageLikes(imageId))
  }

  return { fetchProfileLikes, likesData, likesIsLoading }
}

export default useFetchProfileLikes
