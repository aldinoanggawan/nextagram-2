import 'react-responsive-modal/styles.css'
import React, { useState } from 'react'
import { Modal } from 'react-responsive-modal'

import Loader from './Loader'
import {
  GridContainer,
  GridImg,
  GridImgClick,
  ModalImg,
  ProfileImagesContainer,
  ProfileImagesError,
} from '../styles/content'

const ProfileImages = ({ authId, data, isLoading, userId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImageUrl, setSelectedImageUrl] = useState(null)

  const onOpenModal = e => {
    setIsModalOpen(true)
    setSelectedImageUrl(e.target.src)
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
                <GridImgClick key={id} onClick={onOpenModal}>
                  <GridImg src={url} alt='oops img not found' />
                </GridImgClick>
              ))}
            </GridContainer>
          </ProfileImagesContainer>
          {selectedImageUrl && (
            <Modal
              open={isModalOpen}
              onClose={onCloseModal}
              center
              showCloseIcon={false}
            >
              <ModalImg src={selectedImageUrl} alt='modal pic' />
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
