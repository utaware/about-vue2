import beforeCreateHooks from '../components/BeforeCreate'
import createdHooks from '../components/Created'

export default [
  {
    name: 'beforeCreate',
    component: beforeCreateHooks,
  },
  {
    name: 'created',
    component: createdHooks,
  },
  {
    name: 'beforeMount',
  },
  {
    name: 'mounted',
  },
  {
    name: 'beforeUpdate',
  },
  {
    name: 'updated',
  },
  {
    name: 'activated',
  },
  {
    name: 'deactivated',
  },
  {
    name: 'beforeDestroy',
  },
  {
    name: 'destroyed',
  },
  {
    name: 'errorCaptured',
  },
]
