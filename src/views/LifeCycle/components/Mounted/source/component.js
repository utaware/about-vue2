export default `
  // src/core/vdom/create-component.js
  const componentVNodeHooks = {
    insert (vnode: MountedComponentVNode) {
      const { context, componentInstance } = vnode
      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true
        callHook(componentInstance, 'mounted')
      }
    }
  }
`
