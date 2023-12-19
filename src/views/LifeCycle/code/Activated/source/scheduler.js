export default `
  // src/core/observer/scheduler.js
  function flushSchedulerQueue () {
    const activatedQueue = activatedChildren.slice()
    const updatedQueue = queue.slice()

    // call component updated and activated hooks
    callActivatedHooks(activatedQueue)
    callUpdatedHooks(updatedQueue)
  }

  function callActivatedHooks (queue) {
    for (let i = 0; i < queue.length; i++) {
      queue[i]._inactive = true
      activateChildComponent(queue[i], true /* true */)
    }
  }
`
