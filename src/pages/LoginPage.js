import React from 'react'
import LoginForm from '../components/LoginForm'
import useLoginForm from '../hooks/useLoginForm'

const LoginPage = () => {
  // custom hook
  const { formHooks, formHandler } = useLoginForm()

  return <LoginForm {...formHandler} {...formHooks} />
}

export default LoginPage
