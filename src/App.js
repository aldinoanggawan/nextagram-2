import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import ProfilePage from './pages/ProfilePage'

function App() {
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
      </Switch>
    </>
  )
}

export default App
