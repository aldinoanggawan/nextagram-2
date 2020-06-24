import React from 'react'
import useRegisterForm from '../hooks/useRegisterForm'

import RegisterForm from '../components/RegisterForm'

const RegisterPage = () => {
  const { formHandler, formHooks, formState, isLoading } = useRegisterForm()

  return (
    <RegisterForm
      {...formHandler}
      {...formHooks}
      formState={formState}
      isLoading={isLoading}
    />
  )
}

export default RegisterPage
