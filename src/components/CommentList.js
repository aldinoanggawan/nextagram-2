import moment from 'moment'
import React from 'react'

import {
  AvatarLink,
  ModalAvatar,
  ModalAvatarContainer,
  ModalAvatarImg,
  ModalCommentItem,
  ModalSpan,
  ModalSpanContainer,
} from '../styles/profilePage'

const CommentList = ({ content, created_at, id, posted_by }) => {
  return (
    <ModalCommentItem key={id}>
      <ModalAvatarContainer>
        <ModalAvatar>
          <AvatarLink to={`/users/${posted_by.id}`}>
            <ModalAvatarImg src={posted_by.profileImage} alt='avatar' />
          </AvatarLink>
        </ModalAvatar>
      </ModalAvatarContainer>
      <ModalSpanContainer>
        <ModalSpan>{content}</ModalSpan>
        <ModalSpan small>{moment(created_at).fromNow()}</ModalSpan>
      </ModalSpanContainer>
    </ModalCommentItem>
  )
}

export default CommentList
