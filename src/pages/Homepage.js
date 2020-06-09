import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../actions'
import { Instagram } from 'react-content-loader'
import { Container } from '../styles/content'

import Navbar from '../components/Navbar'
import Card from '../components/Card'
import styled from 'styled-components'

const Div = styled.div`
  background-color: #fafafa;
`

const Homepage = () => {
  const { isLoading, data } = useSelector(state => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchUsers())
  }, [dispatch])
  return (
    <>
      <Div>
        <Navbar />
        {isLoading ? (
          <Container>
            <Instagram />
          </Container>
        ) : (
          data.length !== 0 &&
          data.map(data => <Card key={data.id} {...data} />)
        )}
      </Div>
    </>
  )
}

export default Homepage
