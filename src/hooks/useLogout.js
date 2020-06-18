import { useDispatch } from 'react-redux'
import { logout } from '../actions'

const useLogout = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return { handleLogout }
}

export default useLogout
