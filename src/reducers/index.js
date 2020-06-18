import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'

import authentication from './authentication'
import profile from './profile'
import users from './users'

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    users,
    profile,
    authentication,
  })

export default rootReducer
