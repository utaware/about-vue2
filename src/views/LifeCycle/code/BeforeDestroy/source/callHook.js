export default `
  // src/core/instance/lifecycle.js
  export function lifecycleMixin (Vue: Class<Component>) {
    Vue.prototype.$destroy = function () {
      const vm: Component = this
      if (vm._isBeingDestroyed) {
        return
      }
      callHook(vm, 'beforeDestroy')
    }
  }
`
