import React from 'react'
import { Instagram } from 'react-content-loader'
import ReactPaginate from 'react-paginate'
import useFetchUsers from '../hooks/useFetchUsers'

import Card from '../components/Card'
import {
  CardContainer,
  HomepageContainer,
  PaginateContainer,
} from '../styles/content'

const Homepage = () => {
  // custom hook
  const {
    handlePageClick,
    offset,
    pageCount,
    perPage,
    isLoading,
    data,
  } = useFetchUsers()

  return (
    <>
      <HomepageContainer>
        {isLoading ? (
          <CardContainer>
            <Instagram />
          </CardContainer>
        ) : (
          data.length &&
          data
            .slice(offset, offset + perPage)
            .map(data => <Card key={data.id} {...data} />)
        )}
        <PaginateContainer>
          {!isLoading && (
            <ReactPaginate
              previousLabel={'prev'}
              nextLabel={'next'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={pageCount}
              marginPagesDisplayed={1}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={'pagination'}
              activeClassName={'active'}
            />
          )}
        </PaginateContainer>
      </HomepageContainer>
    </>
  )
}

export default Homepage
