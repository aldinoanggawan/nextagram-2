import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover {
    opacity: 0.7;
  }
`

export const Input = styled.input`
  ${({ file }) =>
    file &&
    css`
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      z-index: -1;

      & + label {
        cursor: pointer;
        font-size: 0.8rem;
        color: #f5ac84;
        border: 1px solid #f5ac84;
        border-radius: 10px;
        padding: 0.25em 0.5em;
      }

      & + label:hover {
        background-color: #f5ac84;
        color: #fff;
      }
    `}

  ${({ submit }) =>
    submit &&
    css`
      cursor: pointer;
      display: block;
      letter-spacing: 3px;
      font-weight: bold;
      color: white;
      margin: 3em 0 0;
      padding: 0.75em 1.2em;
      background: #f5ac84;
      border: none;
      border-radius: 2px;

      &:hover,
      &:focus {
        opacity: 0.7;
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.3;
      }
    `}
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

export const ImgPreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const AuthPageContainer = styled.div`
  padding: 5em 0 10em;
  background-color: #fafafa;
`

export const CardContainer = styled.div`
  max-width: 580px;
  margin: 0 auto;
`

export const HomepageContainer = styled.div`
  padding: 0.1em 0;
  background-color: #fafafa;

  .pagination {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;

    a {
      padding: 0.25em 0.5em;
      &:focus {
        outline: none;
      }
      &:hover {
        color: white;
        background-color: #f5ac84;
        border-radius: 3px;
      }
    }

    li {
      cursor: pointer;
      padding: 0.25em 0;
    }

    .active {
      color: white;
      background-color: #f5ac84;
      border-radius: 3px;
    }

    .disabled {
      cursor: default;
      opacity: 0;
    }
  }
`

export const ImageForm = styled.form`
  margin-left: 3em;
  text-align: center;
`

export const ImagePreviewContainer = styled.div`
  width: 290px;
  height: 290px;
  border: 1px solid #dbdbdb;

  ${({ noImage }) =>
    noImage &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;

      h3 {
        text-transform: uppercase;
        text-align: center;
        opacity: 0.3;
        margin: 0;
      }

      p {
        text-align: center;
        font-size: 0.7rem;
        opacity: 0.3;
        margin: 0.5em 0 0;
      }
    `}

  @media (max-width: 700px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 500px) {
    width: 230px;
    height: 230px;
  }
`

export const ImageUploadContainer = styled.div`
  opacity: ${({ isImageUploadOpen }) => (isImageUploadOpen ? '1' : '0')};
  max-width: 900px;
  width: 95%;
  margin: 0 auto;
  padding-bottom: 2em;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const PaginateContainer = styled.div`
  max-width: 580px;
  width: 95%;
  margin: 0 auto;
`

export const ProfilePageContainer = styled.section`
  background-color: #fafafa;
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

export const CarouselContainer = styled.div`
  .slick-dots {
    position: static;
  }

  img {
    text-align: center;
  }
`
