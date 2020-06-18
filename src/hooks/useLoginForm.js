import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions'

const useLoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const isLoading = useSelector(state => state.authentication.isLoading)
  const dispatch = useDispatch()

  const cred = {
    username,
    password,
  }

  const handleUsername = e => {
    setUsername(e.target.value)
  }

  const handlePassword = e => {
    setPassword(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(login(cred))
  }

  const values = {
    username,
    password,
  }

  const formHandler = {
    handleSubmit,
    handleUsername,
    handlePassword,
  }

  return { isLoading, formHandler, values }
}

export default useLoginForm
