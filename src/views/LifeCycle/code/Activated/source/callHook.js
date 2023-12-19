export default `
  // src/core/instance/lifecycle.js
  export function activateChildComponent (vm: Component, direct?: boolean) {
    if (direct) {
      vm._directInactive = false
      if (isInInactiveTree(vm)) {
        return
      }
    } else if (vm._directInactive) {
      return
    }
    if (vm._inactive || vm._inactive === null) {
      vm._inactive = false
      for (let i = 0; i < vm.$children.length; i++) {
        activateChildComponent(vm.$children[i])
      }
      callHook(vm, 'activated')
    }
  }
`
