import HomePage from '@/views/Home'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/life-cycle',
    name: 'life-cycle',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/LifeCycle'),
  },
]

export default routes
