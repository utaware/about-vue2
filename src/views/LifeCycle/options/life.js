import beforeCreateHookCode from '../code/BeforeCreate'
import createdHookCode from '../code/Created'
import beforeMountHookCode from '../code/BeforeMount'
import mountedHookCode from '../code/Mounted'
import beforeUpdateHookCode from '../code/BeforeUpdate'
import updatedHookCode from '../code/Updated'
import beforeDestroyHookCode from '../code/BeforeDestroy'
import destroyedHookCode from '../code/Destroyed'
import activatedHookCode from '../code/Activated'
import deactivatedHookCode from '../code/Deactivated'
import errorCapturedHookCode from '../code/ErrorCaptured'

const options = [
  {
    name: 'beforeCreate',
    source: beforeCreateHookCode,
  },
  {
    name: 'created',
    source: createdHookCode,
  },
  {
    name: 'beforeMount',
    source: beforeMountHookCode,
  },
  {
    name: 'mounted',
    source: mountedHookCode,
  },
  {
    name: 'beforeUpdate',
    source: beforeUpdateHookCode,
  },
  {
    name: 'updated',
    source: updatedHookCode,
  },
  {
    name: 'beforeDestroy',
    source: beforeDestroyHookCode,
  },
  {
    name: 'destroyed',
    source: destroyedHookCode,
  },
  {
    name: 'activated',
    source: activatedHookCode,
  },
  {
    name: 'deactivated',
    source: deactivatedHookCode,
  },
  {
    name: 'errorCaptured',
    source: errorCapturedHookCode,
  },
]

export default options
