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

const options = [
  {
    name: 'beforeCreate',
    source: beforeCreateHooks,
  },
  {
    name: 'created',
    source: createdHooks,
  },
  {
    name: 'beforeMount',
    source: beforeMountHooks,
  },
  {
    name: 'mounted',
    source: mountedHooks,
  },
  {
    name: 'beforeUpdate',
    source: beforeUpdateHooks,
  },
  {
    name: 'updated',
    source: updatedHooks,
  },
  {
    name: 'beforeDestroy',
    source: beforeDestroyHooks,
  },
  {
    name: 'destroyed',
    source: destroyedHooks,
  },
  {
    name: 'activated',
    source: activatedHooks,
  },
  {
    name: 'deactivated',
    source: deactivatedHooks,
  },
  {
    name: 'errorCaptured',
    source: [],
  },
]

export default options
