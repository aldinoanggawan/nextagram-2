import 'react-responsive-modal/styles.css'
import moment from 'moment'
import React, { useState } from 'react'
import { Modal } from 'react-responsive-modal'
import useFetchProfileComments from '../hooks/useFetchProfileComments'
import useIsAuthenticated from '../hooks/useIsAuthenticated'

import Loader from './Loader'
import {
  AvatarLink,
  GridContainer,
  GridImg,
  GridImgClick,
  ModalAvatar,
  ModalAvatarContainer,
  ModalAvatarImg,
  ModalComment,
  ModalCommentItem,
  ModalImg,
  ModalSpan,
  ModalSpanContainer,
  ProfileImagesContainer,
  ProfileImagesError,
} from '../styles/profilePage'

const ProfileImages = ({ authId, data, isLoading, userId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImageUrl, setSelectedImageUrl] = useState(null)

  // custom hooks
  const {
    commentsIsLoading,
    commentsData,
    fetchProfileComments,
  } = useFetchProfileComments()
  const { isLoggedIn } = useIsAuthenticated()

  const onOpenModal = imageId => e => {
    setIsModalOpen(true)
    setSelectedImageUrl(e.target.src)
    fetchProfileComments(imageId)
  }

  const onCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      {isLoading ? (
        <ProfileImagesContainer>
          <Loader />
        </ProfileImagesContainer>
      ) : data.length ? (
        <>
          <ProfileImagesContainer>
            <GridContainer>
              {data.map(({ id, url }) => (
                <GridImgClick key={id} onClick={onOpenModal(id)}>
                  <GridImg src={url} alt='oops img not found' />
                </GridImgClick>
              ))}
            </GridContainer>
          </ProfileImagesContainer>
          {selectedImageUrl && (
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
                    commentsData.map(
                      ({ content, created_at, id, posted_by }) => (
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
                            <ModalSpan small>
                              {moment(created_at).fromNow()}
                            </ModalSpan>
                          </ModalSpanContainer>
                        </ModalCommentItem>
                      )
                    )
                  ) : (
                    <p>No comment added</p>
                  )}
                </ModalComment>
              )}
            </Modal>
          )}
        </>
      ) : (
        <ProfileImagesContainer>
          {userId === authId.toString() ? (
            <ProfileImagesError>
              You have not uploaded any photo yet
            </ProfileImagesError>
          ) : (
            <ProfileImagesError>
              User has not uploaded any photo yet
            </ProfileImagesError>
          )}
        </ProfileImagesContainer>
      )}
    </>
  )
}

export default ProfileImages
