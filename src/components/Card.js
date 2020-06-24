import React from 'react'
import { CardContainer, CardLayout, StyledLink } from '../styles/content'
import UserImages from '../containers/UserImages'

const Card = ({ id, profileImage, username }) => {
  return (
    <>
      <CardContainer>
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
              <span className='card-header__username'>
                <StyledLink to={`/users/${id}`}>{username}</StyledLink>
              </span>
            </div>
            {/* <div className='card-header__item'>
              <a className='card-header__item--button' href='/'>
                Follow
              </a>
            </div> */}
          </header>
          <main className='card-image'>
            <UserImages userId={id} />
          </main>
        </CardLayout>
      </CardContainer>
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
