export default `
  // src/core/vdom/create-component.js

  // 组件实例
  // componentVNodeHooks.init -> child.$mount
  // componentVNodeHooks.insert -> callHook

  const componentVNodeHooks = {
    init (vnode: VNodeWithData, hydrating: boolean): ?boolean {
      if (
        vnode.componentInstance &&
        !vnode.componentInstance._isDestroyed &&
        vnode.data.keepAlive
      ) {
        // kept-alive components, treat as a patch
        const mountedNode: any = vnode // work around flow
        componentVNodeHooks.prepatch(mountedNode, mountedNode)
      } else {
        const child = vnode.componentInstance = createComponentInstanceForVnode(
          vnode,
          activeInstance
        )
        child.$mount(hydrating ? vnode.elm : undefined, hydrating)
      }
    },

    insert (vnode: MountedComponentVNode) {
      const { context, componentInstance } = vnode
      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true
        callHook(componentInstance, 'mounted')
      }
    }

  }
`
