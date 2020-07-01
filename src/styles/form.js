import styled, { css } from 'styled-components'

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
`

export const FormCard = styled.div`
  margin: 0 auto;
  padding: 3.5em 0 4em;
  max-width: 400px;
  width: 85%;
  border: none;
  border-radius: 10px;
  background: white;
  box-shadow: 0px 0px 10px 3px rgba(219, 219, 219, 0.75);
`

export const FormContainer = styled.div`
  width: 60%;
  margin: 0 auto;

  span {
    position: absolute;
    font-size: 0.7rem;
    color: red;
  }

  p {
    margin: 1.5em 0 0;
    font-size: 0.8rem;
  }

  @media (max-width: 400px) {
    width: 75%;
  }
`

export const FormHeader = styled.h1`
  margin: 0;
  font-size: 2.3rem;
  text-align: center;
`

export const Input = styled.input`
  display: block;
  width: 100%;
  margin-top: 3em;
  padding: 1em 1.5em;
  border: 1px solid #dbdbdb;
  border-radius: 3px;

  & + & {
    margin-top: 2em;
  }

  &:focus {
    outline: none;
    border: 1px solid white;
    box-shadow: inset 0 0 1px 1px black;
  }

  ${({ comment }) =>
    comment &&
    css`
      font-size: 0.8rem;
      width: 84%;
      margin: 0;

      &:focus {
        box-shadow: none;
        border: 1px solid #dbdbdb;
      }
    `}
`

export const Button = styled.input`
  display: block;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: 3px;
  margin-top: 3em;
  width: 100%;
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

  ${({ comment }) =>
    comment &&
    css`
      font-size: 0.8rem;
      width: 15%;
      background: #fff;
      margin: 0;
      color: #0095f6;
    `}
`
