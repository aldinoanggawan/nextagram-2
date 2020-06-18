import React from 'react'
import LoginForm from '../components/LoginForm'
import useLoginForm from '../hooks/useLoginForm'

const LoginPage = () => {
  // custom hook
  const { isLoading, values, formHandler } = useLoginForm()

  return <LoginForm isLoading={isLoading} {...formHandler} {...values} />
}

export default LoginPage
