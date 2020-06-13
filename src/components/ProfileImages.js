import React from 'react'
import {
  GridContainer,
  GridImg,
  ProfileImagesContainer,
} from '../styles/content'
import Loader from './Loader'

const ProfileImages = ({ isLoading, data }) => {
  return (
    <ProfileImagesContainer>
      {isLoading ? (
        <Loader />
      ) : data.length ? (
        <GridContainer>
          {data.map(({ id, url }) => (
            <GridImg key={id} src={url} alt='oops img not found' />
          ))}
        </GridContainer>
      ) : (
        <p>User has not uploaded any photo yet</p>
      )}
    </ProfileImagesContainer>
  )
}

export default ProfileImages
