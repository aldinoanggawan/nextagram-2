import React from 'react'
import { Modal } from 'react-responsive-modal'

import CommentForm from './CommentForm'
import CommentList from './CommentList'
import { ModalComment, ModalImg, ModalWarning } from '../styles/profilePage'

const ImagePreviewModal = ({
  commentsIsLoading,
  commentsData,
  formHandler,
  formHooks,
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
      {isLoggedIn ? (
        <>
          <ModalComment>
            {commentsIsLoading ? (
              <p>Loading comments...</p>
            ) : commentsData.length ? (
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
              <p>No comment added</p>
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
