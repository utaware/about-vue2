export default `
  export function initLifecycle (vm: Component) {
    const options = vm.$options

    // locate first non-abstract parent
    let parent = options.parent
    if (parent && !options.abstract) {
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent
      }
      parent.$children.push(vm)
    }
    // 初始化实例的$parent, $children, $root, $refs等层级关系
    vm.$parent = parent
    vm.$root = parent ? parent.$root : vm

    vm.$children = []
    vm.$refs = {}
    // 初始化实例的watcher
    vm._watcher = null
    // 初始化实例的生命周期状态
    vm._inactive = null
    vm._directInactive = false
    vm._isMounted = false
    vm._isDestroyed = false
    vm._isBeingDestroyed = false
  }
`
