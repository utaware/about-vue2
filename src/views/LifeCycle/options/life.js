import beforeCreateHooks from '../components/BeforeCreate'
import createdHooks from '../components/Created'
import beforeMountHooks from '../components/BeforeMount'
import mountedHooks from '../components/Mounted'
import beforeUpdateHooks from '../components/BeforeUpdate'

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
    component: beforeMountHooks,
  },
  {
    name: 'mounted',
    component: mountedHooks,
  },
  {
    name: 'beforeUpdate',
    component: beforeUpdateHooks,
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
