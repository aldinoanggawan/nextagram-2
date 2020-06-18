import React, { useRef, useEffect } from 'react'
import { LoginPageContainer } from '../styles/content'
import { Button, FormContainer, FormHeader, Input } from '../styles/form'

const Form = ({
  handleSubmit,
  handleUsername,
  handlePassword,
  isLoading,
  username,
  password,
}) => {
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <LoginPageContainer>
      <FormContainer>
        <FormHeader>Login</FormHeader>
        <form onSubmit={handleSubmit}>
          <Input
            ref={inputRef}
            type='text'
            placeholder='Username'
            value={username}
            onChange={handleUsername}
          />
          <Input
            type='password'
            placeholder='Password'
            value={password}
            onChange={handlePassword}
          />
          <Button
            disabled={isLoading === true || !username || !password}
            type='submit'
            value={isLoading ? 'Loading...' : 'login'}
          />
        </form>
      </FormContainer>
    </LoginPageContainer>
  )
}

export default Form
