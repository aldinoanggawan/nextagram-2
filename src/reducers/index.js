import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'

import authentication from './authentication'
import post from './post'
import profile from './profile'
import users from './users'

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    authentication,
    post,
    profile,
    users,
  })

export default rootReducer
