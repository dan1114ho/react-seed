import React from 'react'
import _ from 'lodash'
import { routes } from '../../routes'

export default () => (
  <div>
    {_.map(routes, (route, i) => <p key={i}><a href={route.path}>{route.path}</a></p>)}
  </div>
)
