import React from 'react'

import {
  AvatarLink,
  ModalLikeAvatar,
  ModalLikeAvatarImg,
} from '../styles/profilePage'

const LikeList = ({ id, profileImage }) => {
  return (
    <ModalLikeAvatar>
      <AvatarLink to={`/users/${id}`}>
        <ModalLikeAvatarImg src={profileImage} alt={id} />
      </AvatarLink>
    </ModalLikeAvatar>
  )
}

export default LikeList
