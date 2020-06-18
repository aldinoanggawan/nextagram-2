import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import ReduxThunk from 'redux-thunk'

import rootReducer from './reducers'

export const history = createBrowserHistory()

const loggerMiddleware = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer(history),
  composeEnhancers(
    applyMiddleware(routerMiddleware(history), ReduxThunk, loggerMiddleware)
  )
)

export default store
