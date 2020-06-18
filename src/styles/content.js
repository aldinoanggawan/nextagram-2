import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover {
    opacity: 0.7;
  }
`

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`

export const HomepageContainer = styled.div`
  padding-top: 0.1em;
  background-color: #fafafa;
`

export const CardContainer = styled.div`
  max-width: 580px;
  margin: 0 auto;
`

export const ProfilePageContainer = styled.section`
  background-color: #fafafa;
  /* padding-bottom: 2em; */
`

export const ProfileBioContainer = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 1em;
`

export const ProfileImagesContainer = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 2em auto 0;
  text-align: center;
`

export const GridContainer = styled.div`
  /* display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  grid-auto-rows: 200px; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  gap: 1rem;
  grid-auto-rows: 290px;

  @media (max-width: 900px) {
    gap: 5px;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: calc(33vw - 10px);
  }
`

export const LoginPageContainer = styled.div`
  padding: 5em 0 10em;
  background-color: #fafafa;
`

export const GridImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const BioItem = styled.div`
  padding: 2em 0 0;
  text-align: center;

  .bio-item__avatar-container {
    margin: 0 auto;
    width: 170px;
    height: 170px;
    border-radius: 50%;
    overflow: hidden;

    @media (max-width: 900px) {
      width: 140px;
      height: 140px;
    }
  }

  .bio-item__avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .bio-item__username {
    font-size: 1.9rem;
    font-weight: 300;
    letter-spacing: 0.5px;
    margin: 0.1em 0 0;
  }
`

export const CardLayout = styled.div`
  margin: 2em 0;
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

  .avatar-container {
    width: 35px;
    height: 35px;
    border-radius: 50px;
    overflow: hidden;

    /* display: flex;
    flex-direction: column;
    justify-content: center; */
  }

  .avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    margin-left: 0.75em;
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
    font-weight: bold;
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

  @media (max-width: 550px) {
    border-left: none;
    border-right: none;
  }
`

export const UserImagesError = styled.p`
  margin: 0;
  padding: 6em 0;
  opacity: 0.7;
  text-align: center;
`

export const ProfileContainer = styled.section`
  max-width: 1000px;
  margin: 0 auto;
`

// export const PageContainer = styled.div`
//   max-width: 580px;
//   width: 100%;
//   margin: 0 auto;
// `

// export const CardLayout2 = styled.div`
//   margin: 2em 0;
//   border: 1px solid #dbdbdb;
//   border-radius: 3px;
//   background-color: #fff;

//   img {
//     max-width: 100%;
//   }
// `

// export const CardContainer = styled.div`
//   padding: 0 1em;
// `

// export const CardHeader = styled.header`
//   padding: 0.85em 0;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `

// export const CardHeaderFirstItem = styled.div`
//   display: flex;
//   align-items: center;
// `

// export const Avatar = styled.img`
//   width: 6%;
//   border: none;
//   border-radius: 50px;
// `

// export const Username = styled.span`
//   font-size: 0.8rem;
//   font-weight: bold;
//   margin-left: 0.9em;
// `

// export const HeaderLink = styled.a`
//   cursor: pointer;
//   text-decoration: none;
//   background-color: #38cfd9;
//   color: white;
//   padding: 0.25em 1em;
//   border-radius: 10em;

//   &:focus,
//   &:hover {
//     opacity: 0.8;
//   }
// `
