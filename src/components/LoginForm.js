import React, { useRef, useEffect } from 'react'
import { AuthPageContainer } from '../styles/content'
import {
  Button,
  FormCard,
  FormContainer,
  FormHeader,
  Input,
} from '../styles/form'
import { Link } from 'react-router-dom'

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
    <AuthPageContainer>
      <FormCard>
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
          <p>
            Don't have an account ? <Link to='/register'>Click here !</Link>
          </p>
        </FormContainer>
      </FormCard>
    </AuthPageContainer>
  )
}

export default Form
