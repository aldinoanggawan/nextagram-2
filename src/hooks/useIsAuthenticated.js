import { useSelector } from 'react-redux'

const useIsAuthenticated = () => {
  const isLoggedIn = useSelector(state => state.authentication.isLoggedIn)
  const authId = useSelector(state => state.authentication.authId)

  return { authId, isLoggedIn }
}

export default useIsAuthenticated
