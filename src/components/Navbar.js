import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  padding: 0 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #dbdbdb;
  border-top: none;
  height: 54px;
  position: relative;

  .logo {
    width: 100px;
  }

  .input {
    border: 1px solid #dbdbdb;
    height: 20px;
    width: 180px;
    border-radius: 3px;
    background-color: #fafafa;
  }

  .nav__list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav__item + .nav__item {
    margin-left: 1em;
  }

  .nav__link {
    color: black;
    text-decoration: none;
    text-transform: uppercase;
  }

  .nav__link:hover {
    opacity: 0.6;
  }
`

const Navbar = () => {
  return (
    <Header>
      <img className='logo' src='./nav-logo.svg' alt='navbar-logo' />
      <input className='input' type='text' />
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <a className='nav__link' href='/'>
              Home
            </a>
          </li>
          <li className='nav__item'>
            <a className='nav__link' href='/'>
              Sign In
            </a>
          </li>
        </ul>
      </nav>
    </Header>
  )
}

export default Navbar
