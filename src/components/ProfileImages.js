import React from 'react'
import {
  GridContainer,
  GridImg,
  ProfileImagesContainer,
  UserImagesError,
} from '../styles/content'
import Loader from './Loader'

const ProfileImages = ({ isLoading, data }) => {
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
        <UserImagesError>User has not uploaded any photo yet</UserImagesError>
      )}
    </>
  )
}

export default ProfileImages
