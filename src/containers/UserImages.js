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
  //     const userImagesState = useSelector(state => state.users.images)
  //     const dispatch = useDispatch()

  //     const data = userImagesState.data
  //     const isLoading = userImagesState.isLoading

  //     useEffect(() => {
  //       dispatch(actions.fetchUserImages(userId))
  //     }, [])

  //     return (
  //       <>
  //         {userImagesState.length &&
  //           userImagesState.map(userImage => (
  //             <p key={userImage.id}>User Images with id: {userImage.id}</p>
  //           ))}
  //       </>
  //     )

  const [isLoading, setIsLoading] = useState(true)
  const [userImages, setUserImages] = useState([])

  useEffect(() => {
    const fetchUserImages = async () => {
      try {
        const { data } = await Axios.get(
          `https://insta.nextacademy.com/api/v2/images?userId=${userId}`
        )
        setUserImages(data)
        setIsLoading(false)
      } catch (error) {
        console.log('Error', error)
      }
    }
    fetchUserImages()
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
