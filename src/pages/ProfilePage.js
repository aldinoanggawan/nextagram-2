import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetchProfile from '../hooks/useFetchProfile'
import useFetchProfileImages from '../hooks/useFetchProfileImages'
import useIsAuthenticated from '../hooks/useIsAuthenticated'

import ImageUpload from '../components/ImageUpload'
import Loader from '../components/Loader'
import ProfileBio from '../components/ProfileBio'
import ProfileImages from '../containers/ProfileImages'
import { ProfilePageContainer } from '../styles/content'

const ProfilePage = () => {
  const { userId } = useParams()

  const [isImageUploadOpen, setIsImageUploadOpen] = useState(false)

  // custom hooks
  const { isLoading, data } = useFetchProfile(userId)
  const images = useFetchProfileImages(userId)
  const { authId } = useIsAuthenticated()

  const toggleImageUpload = () => {
    setIsImageUploadOpen(!isImageUploadOpen)
  }

  return (
    <ProfilePageContainer>
      {isLoading ? (
        <Loader />
      ) : Object.keys(data).length || images.data.length ? (
        <>
          <ProfileBio
            authId={authId}
            toggleImageUpload={toggleImageUpload}
            userId={userId}
            {...data}
          />
          <ImageUpload isImageUploadOpen={isImageUploadOpen} />
          <ProfileImages authId={authId} userId={userId} {...images} />
        </>
      ) : // <BioItem>
      //   <p>Uh oh.. The user you're looking for is private / not registered</p>
      // </BioItem>
      // this got rendered first every time profile page is opened
      null}
    </ProfilePageContainer>
  )
}

export default ProfilePage
