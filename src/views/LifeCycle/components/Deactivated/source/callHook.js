export default `
  // src/core/instance/lifecycle.js
  export function deactivateChildComponent (vm: Component, direct?: boolean) {
    if (direct) {
      vm._directInactive = true
      if (isInInactiveTree(vm)) {
        return
      }
    }
    if (!vm._inactive) {
      vm._inactive = true
      for (let i = 0; i < vm.$children.length; i++) {
        deactivateChildComponent(vm.$children[i])
      }
      callHook(vm, 'deactivated')
    }
  }
`
