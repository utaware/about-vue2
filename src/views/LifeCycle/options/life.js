import beforeCreateHooks from '../components/BeforeCreate'
import createdHooks from '../components/Created'
import beforeMountHooks from '../components/BeforeMount'
import mountedHooks from '../components/Mounted'
import beforeUpdateHooks from '../components/BeforeUpdate'
import updatedHooks from '../components/Updated'
import beforeDestroyHooks from '../components/BeforeDestroy'
import destroyedHooks from '../components/Destroyed'
import activatedHooks from '../components/Activated'
import deactivatedHooks from '../components/Deactivated'

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
    component: destroyedHooks,
  },
  {
    name: 'activated',
    component: activatedHooks,
  },
  {
    name: 'deactivated',
    component: deactivatedHooks,
  },
  {
    name: 'errorCaptured',
  },
]
