import React from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import Div from 'components/core/div'
import { routes } from '../../routes'

export default () => (
  <Div>
    {_.map(routes, (route, i) => (
      <Link key={i} to={route.path}>
        {route.path}
      </Link>
    ))}
  </Div>
)
