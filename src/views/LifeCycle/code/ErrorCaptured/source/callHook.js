export default `
  // src/core/util/error.js
  export function handleError (err: Error, vm: any, info: string) {
    // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
    // See: https://github.com/vuejs/vuex/issues/1505
    pushTarget()
    try {
      if (vm) {
        let cur = vm
        while ((cur = cur.$parent)) {
          const hooks = cur.$options.errorCaptured
          if (hooks) {
            for (let i = 0; i < hooks.length; i++) {
              try {
                const capture = hooks[i].call(cur, err, vm, info) === false
                if (capture) return
              } catch (e) {
                globalHandleError(e, cur, 'errorCaptured hook')
              }
            }
          }
        }
      }
      globalHandleError(err, vm, info)
    } finally {
      popTarget()
    }
  }

  function globalHandleError (err, vm, info) {
    if (config.errorHandler) {
      try {
        return config.errorHandler.call(null, err, vm, info)
      } catch (e) {
        // if the user intentionally throws the original error in the handler,
        // do not log it twice
        if (e !== err) {
          logError(e, null, 'config.errorHandler')
        }
      }
    }
    logError(err, vm, info)
  }
`
