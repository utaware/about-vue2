export default `
  // src/core/vdom/create-component.js
  const componentVNodeHooks = {
    insert (vnode: MountedComponentVNode) {
      const { context, componentInstance } = vnode
      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true
        callHook(componentInstance, 'mounted')
      }
      if (vnode.data.keepAlive) {
        if (context._isMounted) {
          // vue-router#1212
          // During updates, a kept-alive component's child components may
          // change, so directly walking the tree here may call activated hooks
          // on incorrect children. Instead we push them into a queue which will
          // be processed after the whole patch process ended.
          // 通过队列调的方式就是把整个 activated 时机延后了
          queueActivatedComponent(componentInstance)
        } else {
          activateChildComponent(componentInstance, true /* direct */)
        }
      }
    },
  }
`
