import React from 'react'
import { Instagram } from 'react-content-loader'
import ReactPaginate from 'react-paginate'
import useFetchUsers from '../hooks/useFetchUsers'

import Card from '../components/Card'
import { HomepageContainer, CardContainer } from '../styles/content'

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
        <CardContainer>
          {!isLoading && (
            <ReactPaginate
              previousLabel={'prev'}
              nextLabel={'next'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={'pagination'}
              activeClassName={'active'}
            />
          )}
        </CardContainer>
      </HomepageContainer>
    </>
  )
}

export default Homepage
