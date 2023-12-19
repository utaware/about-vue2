export default `
  export function initInjections (vm: Component) {
    const result = resolveInject(vm.$options.inject, vm)
    if (result) {
      toggleObserving(false)
      Object.keys(result).forEach(key => {
        defineReactive(vm, key, result[key])
      })
      toggleObserving(true)
    }
  }
`
