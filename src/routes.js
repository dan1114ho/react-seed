import Route from './components/app/route'

import Landing from './components/landing'
import ReactTasks from './components/reactTasks'

export const routes = [
  { path: 'reactTasks', component: ReactTasks },
]

export default {
  path: '/',
  component: Route,
  indexRoute: { component: Landing },
  childRoutes: routes
}
