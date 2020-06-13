import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../actions'
import { Instagram } from 'react-content-loader'
import { CardContainer } from '../styles/content'

import Card from '../components/Card'
import styled from 'styled-components'

const Div = styled.div`
  padding-top: 0.1em;
  background-color: #fafafa;
`

const Homepage = () => {
  const { isLoading, data } = useSelector(state => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!data.length) {
      dispatch(actions.fetchUsers())
    }
  }, [dispatch, data.length])
  return (
    <>
      <Div>
        {isLoading ? (
          <CardContainer>
            <Instagram />
          </CardContainer>
        ) : (
          data.length !== 0 &&
          data.map(data => <Card key={data.id} {...data} />)
        )}
      </Div>
    </>
  )
}

export default Homepage
