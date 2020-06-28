import React from 'react'
import { NavLink } from 'react-router-dom'
import useIsAuthenticated from '../hooks/useIsAuthenticated'
import useLogout from '../hooks/useLogout'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { StyledLink } from '../styles/content'
import { Button, Header } from '../styles/nav'

const Navbar = () => {
  // custom hooks
  const { authId, isLoggedIn } = useIsAuthenticated()
  const { handleLogout } = useLogout()

  return (
    <Header>
      <div className='container row'>
        <StyledLink to='/'>
          <img className='logo' src='/nav-logo.svg' alt='navbar-logo' />
        </StyledLink>
        <nav className='nav'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <NavLink
                exact
                to='/'
                className='nav__link'
                activeClassName='nav__link--selected'
              >
                <FontAwesomeIcon icon={faCompass} />
              </NavLink>
            </li>
            {isLoggedIn ? (
              <>
                <li className='nav__item'>
                  <NavLink
                    exact
                    to={`/users/${authId}`}
                    className='nav__link'
                    activeClassName='nav__link--selected'
                  >
                    <FontAwesomeIcon icon={faUserCircle} />
                  </NavLink>
                </li>
                <li className='nav__item'>
                  <Button onClick={handleLogout} className='nav__link'>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                  </Button>
                </li>
              </>
            ) : (
              <li className='nav__item'>
                <NavLink
                  exact
                  to='/login'
                  className='nav__link'
                  activeClassName='nav__link--selected'
                >
                  <FontAwesomeIcon icon={faSignInAlt} />
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
