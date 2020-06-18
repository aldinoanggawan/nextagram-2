import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import useIsLoggedIn from './hooks/useIsLoggedIn'

import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import ProfilePage from './pages/ProfilePage'
import LoginPage from './pages/LoginPage'

const App = () => {
  const { isLoggedIn } = useIsLoggedIn()
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route path='/users/:userid'>
          <ProfilePage />
        </Route>
        <Route exact path='/login'>
          {isLoggedIn ? <Redirect to='/' /> : <LoginPage />}
        </Route>
      </Switch>
    </>
  )
}

export default App
