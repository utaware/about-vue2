export default `
  // src/core/observer/scheduler.js
  function flushSchedulerQueue () {
    // 获取到 updatedQueue
    callUpdatedHooks(updatedQueue)
  }

  function callUpdatedHooks (queue) {
    let i = queue.length
    while (i--) {
      const watcher = queue[i]
      const vm = watcher.vm
      if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'updated')
      }
    }
  }
`
