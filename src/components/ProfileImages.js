import React from 'react'
import {
  GridContainer,
  GridImg,
  ProfileImagesContainer,
  ProfileImagesError,
} from '../styles/content'
import Loader from './Loader'

const ProfileImages = ({ authId, data, isLoading, userId }) => {
  return (
    <>
      {isLoading ? (
        <ProfileImagesContainer>
          <Loader />
        </ProfileImagesContainer>
      ) : data.length ? (
        <ProfileImagesContainer>
          <GridContainer>
            {data.map(({ id, url }) => (
              <GridImg key={id} src={url} alt='oops img not found' />
            ))}
          </GridContainer>
        </ProfileImagesContainer>
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
