import beforeCreateHooks from '../components/BeforeCreate'
import createdHooks from '../components/Created'
import beforeMountHooks from '../components/BeforeMount'
import mountedHooks from '../components/Mounted'
import beforeUpdateHooks from '../components/BeforeUpdate'
import updatedHooks from '../components/Updated'

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
    component: updatedHooks,
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
