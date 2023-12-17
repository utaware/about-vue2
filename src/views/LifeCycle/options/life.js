import beforeCreate from '../components/BeforeCreate'

export default [
  {
    name: 'beforeCreate',
    color: 'success',
    components: beforeCreate,
  },
  {
    name: 'created',
    color: 'success',
  },
  {
    name: 'beforeMount',
    color: 'primary',
  },
  {
    name: 'mounted',
    color: 'primary',
  },
  {
    name: 'beforeUpdate',
    color: 'primary',
  },
  {
    name: 'updated',
    color: 'primary',
  },
  {
    name: 'activated',
    color: 'warning',
  },
  {
    name: 'deactivated',
    color: 'warning',
  },
  {
    name: 'beforeDestroy',
    color: 'info',
  },
  {
    name: 'destroyed',
    color: 'info',
  },
  {
    name: 'errorCaptured',
    color: 'danger',
  },
]
