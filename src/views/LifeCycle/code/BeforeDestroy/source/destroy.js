export default `
  // src/core/vdom/create-component.js
  const componentVNodeHooks = {
    destroy (vnode: MountedComponentVNode) {
      const { componentInstance } = vnode
      if (!componentInstance._isDestroyed) {
        if (!vnode.data.keepAlive) {
          componentInstance.$destroy()
        } else {
          deactivateChildComponent(componentInstance, true /* direct */)
        }
      }
    }
  }
`
