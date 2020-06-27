import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postImage } from '../actions'

const useImageUploadForm = () => {
  const [imageFile, setImageFile] = useState(null)
  const [previewImage, setPreviewImage] = useState(null)

  const { isLoading, success } = useSelector(state => state.post.image)
  const dispatch = useDispatch()

  useEffect(() => {
    if (success === true) {
      setPreviewImage(null)
      setImageFile(null)
    }
  }, [success])

  const handleFile = e => {
    setPreviewImage(URL.createObjectURL(e.target.files[0]))
    setImageFile(e.target.files[0])
  }

  const handleSubmit = e => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('image', imageFile)
    dispatch(postImage(formData))
  }

  return {
    handleFile,
    handleSubmit,
    imageFile,
    isLoading,
    previewImage,
  }
}

export default useImageUploadForm
