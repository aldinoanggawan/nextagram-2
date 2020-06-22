import React from 'react'

import { ProfileBioContainer, BioItem } from '../styles/content'

const ProfileBio = ({
  authId,
  profileImage,
  toggleImageUpload,
  userId,
  username,
}) => {
  return (
    <>
      <ProfileBioContainer>
        <BioItem>
          <div className='bio-item__avatar-container'>
            <img
              className='bio-item__avatar'
              src={profileImage}
              alt='profile'
            />
          </div>
          <p className='bio-item__username'>{username}</p>
          {authId && userId === authId.toString() && (
            <div className='row'>
              <button onClick={toggleImageUpload} className='bio-item__button'>
                Add photo
              </button>
            </div>
          )}
        </BioItem>
      </ProfileBioContainer>
    </>
  )
}

export default ProfileBio
