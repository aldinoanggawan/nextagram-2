import React from 'react'
import { Instagram } from 'react-content-loader'
import useFetchUsers from '../hooks/useFetchUsers'

import Card from '../components/Card'
import { HomepageContainer, CardContainer } from '../styles/content'

const Homepage = () => {
  // custom hook
  const { isLoading, data } = useFetchUsers()

  return (
    <>
      <HomepageContainer>
        {isLoading ? (
          <CardContainer>
            <Instagram />
          </CardContainer>
        ) : (
          data.length && data.map(data => <Card key={data.id} {...data} />)
        )}
      </HomepageContainer>
    </>
  )
}

export default Homepage
