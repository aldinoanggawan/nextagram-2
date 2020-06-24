import React, { useEffect, useRef } from 'react'

import { AuthPageContainer } from '../styles/content'
import {
  Button,
  FormCard,
  FormContainer,
  FormHeader,
  Input,
} from '../styles/form'
import { Link } from 'react-router-dom'

const RegisterForm = ({
  errors,
  formState,
  handleSubmit,
  isLoading,
  onSubmit,
  register,
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
          <FormHeader>Register</FormHeader>
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
              name='email'
              type='text'
              ref={register({
                required: true,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              placeholder='Email'
            />
            {errors.email?.type === 'required' && (
              <span>Email is required</span>
            )}
            {errors.email?.type === 'pattern' && <span>Incorrect email</span>}
            <Input
              name='password'
              type='password'
              ref={register({ required: true })}
              placeholder='Password'
            />
            {errors.password && <span>Password is required</span>}
            <Button
              type='submit'
              disabled={!formState.isValid || isLoading}
              value={isLoading ? 'Loading...' : 'Register'}
            />
          </form>
          <p>
            Already have an account ? <Link to='/login'>Click here !</Link>
          </p>
        </FormContainer>
      </FormCard>
    </AuthPageContainer>
  )
}

export default RegisterForm
