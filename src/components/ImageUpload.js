import React from 'react'
import useImageUploadForm from '../hooks/useImageUploadForm'

import {
  ImageForm,
  ImageUploadContainer,
  ImagePreviewContainer,
  ImgPreview,
  Input,
} from '../styles/content'

const ImageUpload = ({ isImageUploadOpen }) => {
  const {
    handleFile,
    handleSubmit,
    imageFile,
    isLoading,
    previewImage,
  } = useImageUploadForm()

  return (
    <>
      {isImageUploadOpen && (
        <ImageUploadContainer isImageUploadOpen>
          {previewImage ? (
            <ImagePreviewContainer>
              <ImgPreview src={previewImage} />
            </ImagePreviewContainer>
          ) : (
            <ImagePreviewContainer noImage>
              <h3>Live Preview</h3>
              <p>No file chosen</p>
            </ImagePreviewContainer>
          )}
          <ImageForm onSubmit={handleSubmit}>
            <Input
              file
              type='file'
              name='file'
              id='file'
              accept='image/jpg, image/jpeg, image/png'
              multiple={false}
              onChange={handleFile}
            />
            <label htmlFor='file'>Choose a file...</label>
            <Input
              submit
              type='submit'
              disabled={!imageFile || isLoading === true}
              value={isLoading ? 'LOADING...' : 'UPLOAD'}
            />
          </ImageForm>
        </ImageUploadContainer>
      )}
    </>
  )
}

export default ImageUpload
