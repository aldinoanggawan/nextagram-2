import moment from 'moment'
import React from 'react'
import { Modal } from 'react-responsive-modal'

import {
  AvatarLink,
  ModalAvatar,
  ModalAvatarContainer,
  ModalAvatarImg,
  ModalComment,
  ModalCommentItem,
  ModalImg,
  ModalSpan,
  ModalSpanContainer,
} from '../styles/profilePage'

const ImagePreviewModal = ({
  commentsIsLoading,
  commentsData,
  isModalOpen,
  isLoggedIn,
  onCloseModal,
  selectedImageUrl,
}) => {
  return (
    <Modal
      open={isModalOpen}
      onClose={onCloseModal}
      center={true}
      showCloseIcon={false}
    >
      <ModalImg src={selectedImageUrl} alt='modal pic' />
      {isLoggedIn && (
        <ModalComment>
          {commentsIsLoading ? (
            <p>Loading comments...</p>
          ) : commentsData.length ? (
            commentsData.map(({ content, created_at, id, posted_by }) => (
              <ModalCommentItem key={id}>
                <ModalAvatarContainer>
                  <ModalAvatar>
                    <AvatarLink to={`/users/${posted_by.id}`}>
                      <ModalAvatarImg
                        src={posted_by.profileImage}
                        alt='avatar'
                      />
                    </AvatarLink>
                  </ModalAvatar>
                </ModalAvatarContainer>
                <ModalSpanContainer>
                  <ModalSpan>{content}</ModalSpan>
                  <ModalSpan small>{moment(created_at).fromNow()}</ModalSpan>
                </ModalSpanContainer>
              </ModalCommentItem>
            ))
          ) : (
            <p>No comment added</p>
          )}
        </ModalComment>
      )}
    </Modal>
  )
}

export default ImagePreviewModal
