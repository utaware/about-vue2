import beforeCreateHooks from '../components/BeforeCreate'
import createdHooks from '../components/Created'
import beforeMount from '../components/BeforeMount'

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
    component: beforeMount,
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
