import { useState, useEffect } from 'react'
import Axios from 'axios'

const useFetchUserImages = userId => {
  const [userImages, setUserImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const CancelToken = Axios.CancelToken
    const source = CancelToken.source()

    const fetchData = async () => {
      try {
        const { data } = await Axios.get(
          `https://insta.nextacademy.com/api/v2/images?userId=${userId}`,
          {
            cancelToken: source.token,
          }
        )
        setUserImages(data.sort((a, b) => b.id - a.id))
        setIsLoading(false)
      } catch (error) {
        if (Axios.isCancel(error)) {
          console.log('Cancelled user images')
        } else {
          console.log(error)
        }
      }
    }
    fetchData()
    return () => {
      source.cancel()
    }
  }, [userId])

  return { isLoading, userImages }
}

export default useFetchUserImages
