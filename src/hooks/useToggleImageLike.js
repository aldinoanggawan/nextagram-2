import { useDispatch, useSelector } from 'react-redux'
import { cleanupLikes, postImageLike } from '../actions'

const useToggleImageLike = imageId => {
  const isImageLiked = useSelector(state => state.profile.likes.liked)
  const dispatch = useDispatch()

  const toggleImageLike = () => {
    dispatch(postImageLike(imageId))
  }

  const cleanupLikesOnClose = () => {
    dispatch(cleanupLikes())
  }

  return { cleanupLikesOnClose, isImageLiked, toggleImageLike }
}

export default useToggleImageLike
