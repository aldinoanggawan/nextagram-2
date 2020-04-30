import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import styled from 'styled-components'

const Div = styled.div`
  background-color: #fafafa;
`

const Homepage = () => {
  return (
    <>
      <Div>
        <Navbar />
        <Card />
      </Div>
    </>
  )
}

export default Homepage
