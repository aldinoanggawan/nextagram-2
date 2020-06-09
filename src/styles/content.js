import styled from 'styled-components'

export const Container = styled.div`
  max-width: 580px;
  margin: 0 auto;
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

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .avatar {
    width: 100%;
    border: none;
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
