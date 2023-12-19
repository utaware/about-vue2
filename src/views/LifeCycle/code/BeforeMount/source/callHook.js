export default `
  // src/core/instance/lifecycle.js
  export function mountComponent (
    vm: Component,
    el: ?Element,
    hydrating?: boolean
  ): Component {
    vm.$el = el

    callHook(vm, 'beforeMount')
  }
`
