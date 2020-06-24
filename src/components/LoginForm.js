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
  errors,
  formState,
  handleSubmit,
  register,
  isLoading,
  onSubmit,
}) => {
  const firstInputRef = useRef()

  useEffect(() => {
    firstInputRef.current.focus()
    register(firstInputRef.current, { required: true, maxLength: 20 })
  }, [register])

  return (
    <AuthPageContainer>
      <FormCard>
        <FormContainer>
          <FormHeader>Login</FormHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name='username'
              type='text'
              ref={firstInputRef}
              placeholder='Username'
            />
            {errors.username?.type === 'required' && (
              <span>Username is required</span>
            )}
            {errors.username?.type === 'maxLength' && (
              <span>Username exceeded maximum length</span>
            )}
            <Input
              name='password'
              type='password'
              ref={register({ required: true })}
              placeholder='Password'
            />
            {errors.password && <span>Password is required</span>}
            <Button
              disabled={!formState.isValid || isLoading}
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
