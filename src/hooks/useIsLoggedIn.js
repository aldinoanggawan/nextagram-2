import { useSelector } from 'react-redux'

const useIsLoggedIn = () => {
  const isLoggedIn = useSelector(state => state.authentication.isLoggedIn)

  return { isLoggedIn }
}

export default useIsLoggedIn
