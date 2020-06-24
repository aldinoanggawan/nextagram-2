import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions'

const useLoginForm = () => {
  const { errors, handleSubmit, formState, register } = useForm({
    mode: 'onChange',
  })

  const isLoading = useSelector(state => state.authentication.isLoading)
  const dispatch = useDispatch()

  const onSubmit = data => {
    dispatch(login(data))
  }

  const formHooks = {
    errors,
    formState,
    handleSubmit,
    register,
  }

  const formHandler = {
    isLoading,
    onSubmit,
  }

  return { formHooks, formHandler }
}

export default useLoginForm
