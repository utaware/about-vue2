import beforeCreateHooks from '../components/BeforeCreate'
import createdHooks from '../components/Created'
import beforeMountHooks from '../components/BeforeMount'
import mountedHooks from '../components/Mounted'
import beforeUpdateHooks from '../components/BeforeUpdate'
import updatedHooks from '../components/Updated'
import beforeDestroyHooks from '../components/BeforeDestroy'

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
    name: 'beforeDestroy',
    component: beforeDestroyHooks,
  },
  {
    name: 'destroyed',
  },
  {
    name: 'activated',
  },
  {
    name: 'deactivated',
  },
  {
    name: 'errorCaptured',
  },
]
