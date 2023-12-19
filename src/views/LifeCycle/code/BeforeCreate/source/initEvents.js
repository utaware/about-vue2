export default `
  export function initEvents (vm: Component) {
    // 挂载自定义事件, 组件中使用v-on监听的非native的事件（原生的DOM事件并非在initEvents中挂载）
    // 在$on,$off,$once,$emit等事件处理中被使用
    vm._events = Object.create(null)
    vm._hasHookEvent = false
    // init parent attached events
    // 父组件中声明的自定义的事件保存在子组件的_parentListeners属性中
    // _parentListeners是在initInternalComponent中定义的
    const listeners = vm.$options._parentListeners
    if (listeners) {
      // 在updateListeners通过add和remove添加和移除事件
      updateComponentListeners(vm, listeners)
    }
  }
`
