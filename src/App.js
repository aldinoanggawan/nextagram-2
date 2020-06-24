import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Slide, ToastContainer } from 'react-toastify'
import useIsAuthenticated from './hooks/useIsAuthenticated'

import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import RegisterPage from './pages/RegisterPage'

const App = () => {
  const { isLoggedIn } = useIsAuthenticated()
  return (
    <>
      <ToastContainer
        transition={Slide}
        position='top-center'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route path='/users/:userId'>
          <ProfilePage />
        </Route>
        <Route exact path='/login'>
          {isLoggedIn ? <Redirect to='/' /> : <LoginPage />}
        </Route>
        <Route exact path='/register'>
          {isLoggedIn ? <Redirect to='/' /> : <RegisterPage />}
        </Route>
      </Switch>
    </>
  )
}

export default App
