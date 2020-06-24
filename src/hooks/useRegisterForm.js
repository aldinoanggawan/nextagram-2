import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { registerAccount } from '../actions'

const useRegisterForm = () => {
  const { errors, handleSubmit, register, formState } = useForm({
    mode: 'onChange',
  })

  const isLoading = useSelector(state => state.authentication.isLoading)
  const dispatch = useDispatch()

  const onSubmit = data => {
    dispatch(registerAccount(data))
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

  return { formHandler, formHooks }
}

export default useRegisterForm
