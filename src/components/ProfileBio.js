import React from 'react'
import { ProfileBioContainer, BioItem } from '../styles/content'

const ProfileBio = ({ username, profileImage }) => {
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
        </BioItem>
      </ProfileBioContainer>
    </>
  )
}

export default ProfileBio
