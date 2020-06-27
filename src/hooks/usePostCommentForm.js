import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { postComment } from '../actions'

const usePostCommentForm = imageId => {
  const { formState, handleSubmit, register, reset } = useForm({
    mode: 'onChange',
  })

  const postCommentState = useSelector(state => state.post.comment)
  const postIsLoading = postCommentState.isLoading
  const postSuccess = postCommentState.success
  const dispatch = useDispatch()

  useEffect(() => {
    if (postSuccess === true) {
      reset()
    }
  }, [postSuccess, reset])

  const onSubmit = content => {
    dispatch(postComment(content, imageId))
  }

  const formHooks = {
    formState,
    handleSubmit,
    register,
  }

  const formHandler = {
    onSubmit,
    postIsLoading,
  }

  return { formHooks, formHandler }
}

export default usePostCommentForm
