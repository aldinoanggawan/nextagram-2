import 'react-responsive-modal/styles.css'
import React, { useState } from 'react'
import useFetchProfileComments from '../hooks/useFetchProfileComments'
import useIsAuthenticated from '../hooks/useIsAuthenticated'
import usePostCommentForm from '../hooks/usePostCommentForm'

import ImagePreviewModal from '../components/ImagePreviewModal'
import Loader from '../components/Loader'
import {
  GridContainer,
  GridImg,
  GridImgClick,
  ProfileImagesContainer,
  ProfileImagesError,
} from '../styles/profilePage'

const ProfileImages = ({ authId, data, isLoading, userId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImageId, setSelectedImageId] = useState(null)
  const [selectedImageUrl, setSelectedImageUrl] = useState(null)

  // custom hooks
  const { formHooks, formHandler } = usePostCommentForm(selectedImageId)
  const {
    commentsIsLoading,
    commentsData,
    fetchProfileComments,
  } = useFetchProfileComments()
  const { isLoggedIn } = useIsAuthenticated()

  const onOpenModal = imageId => e => {
    setIsModalOpen(true)
    setSelectedImageId(imageId)
    setSelectedImageUrl(e.target.src)
    fetchProfileComments(imageId)
  }

  const onCloseModal = () => {
    setIsModalOpen(false)
  }

  const modalProps = {
    commentsIsLoading,
    commentsData,
    isModalOpen,
    isLoggedIn,
    onCloseModal,
    selectedImageUrl,
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
            <ImagePreviewModal
              formHooks={formHooks}
              {...modalProps}
              formHandler={formHandler}
            />
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
