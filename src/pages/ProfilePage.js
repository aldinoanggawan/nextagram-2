import React from 'react'
import { ProfilePageContainer } from '../styles/content'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import useFetchProfile from '../hooks/useFetchProfile'
import useFetchProfileImages from '../hooks/useFetchProfileImages'
import ProfileBio from '../components/ProfileBio'
import ProfileImages from '../components/ProfileImages'

const ProfilePage = () => {
  const { userid } = useParams()

  // custom hooks
  const { isLoading, data } = useFetchProfile(userid)
  const images = useFetchProfileImages(userid)

  return (
    <ProfilePageContainer>
      {isLoading ? (
        <Loader />
      ) : Object.keys(data).length || images.data.length ? (
        <>
          <ProfileBio {...data} />
          <ProfileImages {...images} />
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
