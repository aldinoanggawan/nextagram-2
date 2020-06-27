import React from 'react'
import { Link } from 'react-router-dom'

import UserImages from '../containers/UserImages'
import { CardContainer, CardLayout, StyledLink } from '../styles/content'

const Card = ({ id, profileImage, username }) => {
  return (
    <>
      <CardContainer>
        <CardLayout>
          <header className='card-header row'>
            <div className='card-header__item card-header__item--first'>
              <div className='avatar-container'>
                <Link to={`/users/${id}`}>
                  <img
                    className='avatar'
                    src={profileImage}
                    alt='random-avatar'
                  />
                </Link>
              </div>
              <span className='card-header__username'>
                <StyledLink to={`/users/${id}`}>{username}</StyledLink>
              </span>
            </div>
          </header>
          <main className='card-image'>
            <UserImages userId={id} />
          </main>
        </CardLayout>
      </CardContainer>
    </>
  )
}

export default Card
