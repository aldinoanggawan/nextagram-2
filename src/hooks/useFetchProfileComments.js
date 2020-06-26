import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfileComments } from '../actions'

const useFetchProfileComments = () => {
  const comments = useSelector(state => state.profile.comments)
  const commentsIsLoading = comments.isLoading
  const commentsData = comments.data

  const dispatch = useDispatch()

  const fetchProfileComments = imageId => {
    dispatch(fetchUserProfileComments(imageId))
  }

  return {
    commentsIsLoading,
    commentsData,
    fetchProfileComments,
  }
}

export default useFetchProfileComments
