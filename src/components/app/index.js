import React from 'react'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import routes from '../../routes'
import createStore from '../../redux/store'
import '../../styles/bootstrap.scss'

const store = createStore()

export default () => (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
)
