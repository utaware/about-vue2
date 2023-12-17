export default `
  export function initMixin (Vue: Class<Component>) {
    Vue.prototype._init = function (options?: Object) {
      initInjections(vm) // resolve injections before data/props
      initState(vm)
      initProvide(vm) // resolve provide after data/props
      callHook(vm, 'created')
    }
  }
`
