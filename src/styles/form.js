import styled from 'styled-components'

export const FormContainer = styled.div`
  margin: 0 auto;
  padding: 3.5em 0 4em;
  max-width: 400px;
  width: 85%;
  border: none;
  border-radius: 10px;
  background: white;
  box-shadow: 0px 0px 10px 3px rgba(219, 219, 219, 0.75);
`

export const FormHeader = styled.h1`
  margin: 0;
  font-size: 2.3rem;
  text-align: center;
`

export const Input = styled.input`
  display: block;
  width: 60%;
  margin: 3em auto 0;
  padding: 1em 1.5em;
  border: 1px solid #dbdbdb;
  border-radius: 3px;

  & + & {
    margin: 2em auto 0;
  }

  &:focus {
    outline: none;
    border: 1px solid white;
    box-shadow: inset 0 0 1px 1px black;
  }
`

export const Button = styled.input`
  display: block;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  /* border: 2px solid #92f19e; */
  border: none;
  border-radius: 3px;
  margin: 3em auto 0;
  width: 60%;
  padding: 1em 0;
  background: #00bb91;

  &:hover,
  &:focus {
    opacity: 0.7;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`
