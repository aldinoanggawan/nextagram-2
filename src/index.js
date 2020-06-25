import { ConnectedRouter } from 'connected-react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'

import App from './App'
import store, { history } from './configureStore'
import * as serviceWorker from './serviceWorker'
import GlobalStyle from './styles/globalStyle'
import { ScrollToTop } from './ScrollToTop'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ConnectedRouter history={history}>
        <GlobalStyle />
        <ScrollToTop />
        <App />
      </ConnectedRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
