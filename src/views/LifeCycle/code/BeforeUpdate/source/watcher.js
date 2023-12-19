export default `
  // src/core/observer/watcher.js
  export default class Watcher {
    constructor (
      vm: Component,
      expOrFn: string | Function,
      cb: Function,
      options?: ?Object,
      isRenderWatcher?: boolean
    ) {
      this.vm = vm
      if (isRenderWatcher) {
        vm._watcher = this
      }
      vm._watchers.push(this)
    }

    update () {
      /* istanbul ignore else */
      if (this.lazy) {
        this.dirty = true
      } else if (this.sync) {
        this.run()
      } else {
        queueWatcher(this)
      }
    }
  }
`
