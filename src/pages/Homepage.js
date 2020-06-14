import React from 'react'
import useFetchUsers from '../hooks/useFetchUsers'
import { Instagram } from 'react-content-loader'
import { HomepageContainer, CardContainer } from '../styles/content'
import Card from '../components/Card'

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
          data.length !== 0 &&
          data.map(data => <Card key={data.id} {...data} />)
        )}
      </HomepageContainer>
    </>
  )
}

export default Homepage
