import React from 'react'

import { Button, Form, Input } from '../styles/form'

const CommentForm = ({
  commentsIsLoading,
  formState,
  handleSubmit,
  onSubmit,
  postIsLoading,
  register,
}) => {
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        comment
        name='content'
        type='text'
        ref={register({ required: true })}
        placeholder='Enter comment here...'
      />
      <Button
        comment
        type='submit'
        disabled={commentsIsLoading || !formState.isValid || postIsLoading}
        value='send'
      />
    </Form>
  )
}

export default CommentForm
