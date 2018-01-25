import React from 'react'
import _ from 'lodash'
import { BrowserRouter, browserHistory, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { routes } from '../../routes'
import createStore from '../../redux/store'
import '../../styles/bootstrap.scss'

const store = createStore()

export default () => (
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <div>
        {_.map(routes, (route, index) => <Route key={index} path={route.path} component={route.component} exact={route.exact} />)}
      </div>
    </BrowserRouter>
  </Provider>
)
