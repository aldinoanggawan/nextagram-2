import React from 'react'
import { Modal } from 'react-responsive-modal'

import CommentForm from './CommentForm'
import CommentList from './CommentList'
import LikeList from './LikeList'
import {
  ModalComment,
  ModalImg,
  ModalIndicator,
  ModalLike,
  ModalLikeAvatarContainer,
  ModalLikeButtonContainer,
  ModalLikeItem,
  ModalWarning,
} from '../styles/profilePage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const ImagePreviewModal = ({
  commentsData,
  commentsIsLoading,
  formHandler,
  formHooks,
  isModalOpen,
  isLoggedIn,
  likesData,
  likesIsLoading,
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
      {isLoggedIn ? (
        <>
          <ModalLike>
            <ModalLikeItem>
              <ModalLikeButtonContainer>
                <FontAwesomeIcon icon={faHeart} />
              </ModalLikeButtonContainer>
              <ModalLikeAvatarContainer>
                {likesIsLoading ? (
                  <ModalIndicator>Loading likes...</ModalIndicator>
                ) : likesData.length !== 0 ? (
                  likesData.map(({ id, profileImage }) => (
                    <LikeList key={id} id={id} profileImage={profileImage} />
                  ))
                ) : (
                  <ModalIndicator>Give this photo a like ! </ModalIndicator>
                )}
              </ModalLikeAvatarContainer>
            </ModalLikeItem>
          </ModalLike>

          <ModalComment>
            {commentsIsLoading ? (
              <ModalIndicator>Loading comments...</ModalIndicator>
            ) : commentsData.length !== 0 ? (
              commentsData.map(({ content, created_at, id, posted_by }) => (
                <CommentList
                  key={id}
                  content={content}
                  created_at={created_at}
                  id={id}
                  posted_by={posted_by}
                />
              ))
            ) : (
              <ModalIndicator>No comment added</ModalIndicator>
            )}
          </ModalComment>
          <CommentForm
            commentsIsLoading={commentsIsLoading}
            {...formHooks}
            {...formHandler}
          />
        </>
      ) : (
        <ModalWarning>Log in to see comments !</ModalWarning>
      )}
    </Modal>
  )
}

export default ImagePreviewModal
