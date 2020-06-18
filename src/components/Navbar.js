import React from 'react'
import { NavLink } from 'react-router-dom'
import useIsLoggedIn from '../hooks/useIsLoggedIn'
import useLogout from '../hooks/useLogout'

import { StyledLink } from '../styles/content'
import { Button, Header } from '../styles/nav'

const Navbar = () => {
  // custom hooks
  const { isLoggedIn } = useIsLoggedIn()
  const { handleLogout } = useLogout()

  return (
    <Header>
      <div className='container row'>
        <StyledLink to='/'>
          <img className='logo' src='/nav-logo.svg' alt='navbar-logo' />
        </StyledLink>
        <input className='input' type='text' placeholder='Search' />
        <nav className='nav'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <NavLink
                exact
                to='/'
                className='nav__link'
                activeClassName='nav__link--selected'
              >
                Home
              </NavLink>
            </li>
            {isLoggedIn ? (
              <li className='nav__item'>
                <Button onClick={handleLogout} className='nav__link'>
                  Logout
                </Button>
              </li>
            ) : (
              <li className='nav__item'>
                <NavLink
                  exact
                  to='/login'
                  className='nav__link'
                  activeClassName='nav__link--selected'
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </Header>
  )
}

export default Navbar
