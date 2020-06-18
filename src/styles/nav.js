import styled from 'styled-components'

export const Header = styled.header`
  background-color: white;
  padding: 0.5em 0;
  border: 1px solid #dbdbdb;
  border-top: none;
  position: sticky;
  z-index: 1;
  top: 0;

  input:focus {
    outline: none;
  }

  .container {
    width: 95%;
    max-width: 900px;
    margin: 0 auto;
    align-items: center;
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

  .logo {
    width: 100px;
  }

  .input {
    height: 20px;
    width: 180px;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    background-color: #fafafa;
    text-align: center;
  }

  .nav__list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav__item + .nav__item {
    margin-left: 1em;
  }

  .nav__link {
    color: black;
    text-decoration: none;
    text-transform: uppercase;
  }

  .nav__link--selected {
    color: #38cfd9;
  }

  .nav__link:hover {
    opacity: 0.6;
  }
`

export const Button = styled.span`
  cursor: pointer;
`
