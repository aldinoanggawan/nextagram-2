import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const AvatarLink = styled(Link)``

export const GridContainer = styled.div`
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

export const ProfileBioContainer = styled.div`
  max-width: 900px;
  width: 95%;
  margin: 0 auto;
  padding-bottom: 1em;
`

export const ProfileImagesContainer = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding-top: 2em;
  text-align: center;
  border-top: 1px solid #dbdbdb;
`

export const BioItem = styled.div`
  padding: 2em 0 0;

  .row {
    display: flex;
    justify-content: flex-end;
  }

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
    text-align: center;
    font-size: 1.9rem;
    font-weight: 300;
    letter-spacing: 0.5px;
    margin: 0.1em 0 0;
  }

  .bio-item__button {
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    color: #f5ac84;
    background: none;
    border: 2px solid #f5ac84;
    border-radius: 5px;
    padding: 0.5em 0.75em;

    &:hover,
    &:focus {
      opacity: 0.7;
    }
  }
`

export const GridImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const GridImgClick = styled.div`
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`

export const ModalAvatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
`

export const ModalAvatarContainer = styled.div`
  width: 10%;
`

export const ModalAvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ModalComment = styled.article`
  margin-top: 0.5em;

  p {
    font-size: 0.9rem;
    opacity: 0.7;
    margin: 0;
  }
`

export const ModalCommentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 0;
  border-bottom: 1px solid #dbdbdb;
`

export const ModalImg = styled.img`
  max-width: 100%;
  max-height: 88vh;
  display: block;
  margin: 0 auto;
`

export const ModalSpan = styled.span`
  font-size: 0.9rem;
  display: block;

  ${({ small }) =>
    small &&
    css`
      font-size: 0.3rem;
      margin-top: 1em;
      opacity: 0.5;
    `}
`

export const ModalSpanContainer = styled.div`
  width: 88%;
`

export const ModalWarning = styled.p`
  opacity: 0.7;
  margin: 0.5em 0 0;
`

export const ProfileImagesError = styled.p`
  margin: 0;
  padding: 4em 0 8em;
  opacity: 0.7;
  text-align: center;
`
