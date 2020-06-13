import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Carousel from '../components/Carousel'
import Axios from 'axios'
import Loader from '../components/Loader'

const P = styled.p`
  padding: 6em 0;
  opacity: 0.7;
  text-align: center;
`

const UserImages = ({ userId }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [userImages, setUserImages] = useState([])

  useEffect(() => {
    const CancelToken = Axios.CancelToken
    const source = CancelToken.source()

    const fetchUserImages = async () => {
      try {
        const { data } = await Axios.get(
          `https://insta.nextacademy.com/api/v2/images?userId=${userId}`,
          {
            cancelToken: source.token,
          }
        )
        setUserImages(data)
        setIsLoading(false)
      } catch (error) {
        if (Axios.isCancel(error)) {
          console.log('cancelled user images')
        } else {
          console.log(error)
        }
      }
    }
    fetchUserImages()
    return () => {
      source.cancel()
    }
  }, [userId])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : userImages.length ? (
        <Carousel userImages={userImages} />
      ) : (
        <P>User has not uploaded any photo yet.</P>
      )}
    </>
  )
}

export default UserImages
