import React from 'react'
import Carousel from '../components/Carousel'
import Loader from '../components/Loader'
import useFetchUserImages from '../hooks/useFetchUserImages'
import { UserImagesError } from '../styles/content'

const UserImages = ({ userId }) => {
  const { isLoading, userImages } = useFetchUserImages(userId)

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : userImages.length ? (
        <Carousel userImages={userImages} />
      ) : (
        <UserImagesError>User has not uploaded any photo yet.</UserImagesError>
      )}
    </>
  )
}

export default UserImages
