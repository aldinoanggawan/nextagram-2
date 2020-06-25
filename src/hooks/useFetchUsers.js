import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../actions'
import { ScrollToTopOnClick } from '../ScrollToTop'

const useFetchUsers = () => {
  const [offset, setOffset] = useState(0)
  const [pageCount, setPageCount] = useState()
  const perPage = 10

  const users = useSelector(state => state.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  useEffect(() => {
    setPageCount(Math.ceil(users.data.length / perPage))
  }, [perPage, users.data.length])

  const handlePageClick = e => {
    const selectedPage = e.selected
    const offsetPage = selectedPage * perPage
    setOffset(offsetPage)
    ScrollToTopOnClick()
  }

  return { handlePageClick, offset, pageCount, perPage, ...users }
}

export default useFetchUsers
