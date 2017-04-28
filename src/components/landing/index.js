import React from 'react'
import _ from 'lodash'
import { routes } from '../../routes'

export default () => (
  <div>
    {_.map(routes, (route, i) => <p><a href={route.path} key={i}>{route.path}</a></p>)}
  </div>
)
