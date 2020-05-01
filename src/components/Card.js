import React, { useEffect } from 'react'
import styled from 'styled-components'
import LoveAction from '../love-action.svg'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../actions'

const Container = styled.div`
  max-width: 615px;
  margin: 0 auto;
`

const CardLayout = styled.div`
  margin: 2em 0;
  /* padding: 0.5em; */
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  background-color: white;

  a {
    text-decoration: none;
    color: #262626;
  }

  img {
    width: 100%;
  }

  input:focus {
    outline: none;
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

  .avatar {
    width: 6%;
    border: none;
    border-radius: 50%;
  }

  .card-header {
    align-items: center;
    padding: 0.75em 1em;
    border-bottom: 1px solid #dbdbdb;
  }

  .card-header__username {
    font-weight: bold;
    color: #262626;
  }

  .card-header__item span {
    margin-left: 1em;
  }

  .card-header__item--first {
    display: flex;
    align-items: center;
  }

  .card-header__item--button {
    text-decoration: none;
    background-color: #38cfd9;
    color: white;
    padding: 0.25em 1em;
    border-radius: 10em;
  }

  .card-header__item--button:hover {
    opacity: 0.8;
  }

  .card-image {
    padding: 0;
  }

  .card-description {
    padding: 0.75em 1em;
    border-bottom: 1px solid #dbdbdb;
  }

  .card-description__action {
    margin-bottom: 0.2em;
  }

  .card-description__action img {
    width: 4%;
  }

  .card-description__like {
    margin-bottom: 0.5em;
    font-weight: bold;
  }

  .card-description__text--username {
    margin-right: 0.4em;
  }

  .card-description__time {
    text-transform: uppercase;
    color: #8e8e8e;
    font-size: 10px;
  }

  .card-footer {
    padding: 1em;
  }

  .form {
    display: flex;
    justify-content: space-between;
  }

  .form__input {
    border: none;
    width: 100%;
    font-size: 15px;
  }

  .form__submit {
    cursor: pointer;
    border: none;
    color: #0095f6;
    font-size: 15px;
    font-weight: bold;
  }
`

const Card = () => {
  const images = useSelector(state => state.images)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchImages())
  }, [])

  return (
    <>
      <Container>
        {images.images.map(image => (
          <CardLayout key={image.id}>
            <header className='card-header row'>
              <div className='card-header__item card-header__item--first'>
                <img
                  className='avatar'
                  src='./avatar.jpg'
                  alt='random-avatar'
                />
                <span className='card-header__username'>{image.author}</span>
              </div>
              <div className='card-header__item'>
                <a className='card-header__item--button' href='/'>
                  Follow
                </a>
              </div>
            </header>
            <main className='card-image'>
              <img src={image.download_url} alt='ui-ux-layout' />
            </main>
            <article className='card-description'>
              <section className='card-description__action'>
                <span>
                  <a href='/'>
                    <img src={LoveAction} alt='action-1' />
                  </a>
                </span>
              </section>
              <section className='card-description__like'>
                <span>
                  <a href='/'>20 likes</a>
                </span>
              </section>
              <section className='card-description__text'>
                <strong className='card-description__text--username'>
                  aldinoanggawan
                </strong>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in
                </span>
              </section>
              <section className='card-description__time'>
                <span>1 minute ago</span>
              </section>
            </article>
            <footer className='card-footer'>
              <form className='form'>
                <input
                  className='form__input'
                  type='text'
                  placeholder='Add a comment...'
                />
                <input className='form__submit' type='submit' value='Post' />
              </form>
            </footer>
          </CardLayout>
        ))}
      </Container>
    </>
  )
}

export default Card
