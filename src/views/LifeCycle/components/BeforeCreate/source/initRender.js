export default `
  export function initRender (vm: Component) {
    // 初始化实例标记, 实例节点和是否为静态节点
    vm._vnode = null // the root of the child tree
    vm._staticTrees = null // v-once cached trees
    const options = vm.$options
    const parentVnode = vm.$vnode = options._parentVnode // the placeholder node in parent tree
    const renderContext = parentVnode && parentVnode.context

    // 定义插槽和和给render函数的参数createElement
    vm.$slots = resolveSlots(options._renderChildren, renderContext)
    vm.$scopedSlots = emptyObject
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false)
    // normalization is always applied for the public version, used in
    // user-written render functions.
    vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true)

    // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated
    const parentData = parentVnode && parentVnode.data
    // 响应式添加$attrs、$listeners
    if (process.env.NODE_ENV !== 'production') {
      defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, () => {
        !isUpdatingChildComponent && warn(\`$attrs is readonly.\`, vm)
      }, true)
      defineReactive(vm, '$listeners', options._parentListeners || emptyObject, () => {
        !isUpdatingChildComponent && warn(\`$listeners is readonly.\`, vm)
      }, true)
    } else {
      defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true)
      defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true)
    }
  }
`
