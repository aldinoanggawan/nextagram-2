import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk, loggerMiddleware))
)

export default store
