import React from 'react'
import useRegisterForm from '../hooks/useRegisterForm'

import RegisterForm from '../components/RegisterForm'

const RegisterPage = () => {
  //custom hook
  const { formHandler, formHooks } = useRegisterForm()

  return <RegisterForm {...formHandler} {...formHooks} />
}

export default RegisterPage
