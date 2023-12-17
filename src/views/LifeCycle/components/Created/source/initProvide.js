export default `
  export function initProvide (vm: Component) {
    const provide = vm.$options.provide
    if (provide) {
      vm._provided = typeof provide === 'function'
        ? provide.call(vm)
        : provide
    }
  }
`
