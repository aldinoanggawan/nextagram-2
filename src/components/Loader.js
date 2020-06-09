import React from 'react'
import ContentLoader from 'react-content-loader'

const Loader = () => {
  return (
    <ContentLoader
      speed={2}
      viewBox='0 0 620 325'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='0' rx='0' ry='0' width='620' height='325' />
    </ContentLoader>
  )
}

export default Loader
