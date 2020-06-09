import React from 'react'
import { Container, CardLayout } from '../styles/content'
import LoveAction from '../love-action.svg'
import UserImages from '../containers/UserImages'

const Card = ({ id, profileImage, username }) => {
  return (
    <>
      <Container>
        <CardLayout>
          <header className='card-header row'>
            <div className='card-header__item card-header__item--first'>
              <div className='avatar-container'>
                <img
                  className='avatar'
                  src={profileImage}
                  alt='random-avatar'
                />
              </div>
              <span className='card-header__username'>{username}</span>
            </div>
            <div className='card-header__item'>
              <a className='card-header__item--button' href='/'>
                Follow
              </a>
            </div>
          </header>
          <main className='card-image'>
            <UserImages userId={id} />
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
                {username}
              </strong>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in
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
      </Container>
    </>
    // <PageContainer>
    //   <CardLayout>
    //     <CardContainer>
    //       <CardHeader>
    //         <CardHeaderFirstItem>
    //           <Avatar src='./avatar.jpg' alt='card small avatar' />
    //           <Username>{author}</Username>
    //         </CardHeaderFirstItem>
    //         <div>
    //           <HeaderLink>Follow</HeaderLink>
    //         </div>
    //       </CardHeader>
    //     </CardContainer>
    //     <img src={download_url} alt='random lorem photos' />
    //   </CardLayout>
    // </PageContainer>
  )
}

export default Card
