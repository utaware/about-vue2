export default `
  // src/core/instance/init.js
  export function initMixin (Vue: Class<Component>) {
    Vue.prototype._init = function (options?: Object) {
      const vm: Component = this

      if (vm.$options.el) {
        vm.$mount(vm.$options.el)
      }
    }
  }

  // src/platforms/web/runtime/index.js
  Vue.prototype.$mount = function (
    el?: string | Element,
    hydrating?: boolean
  ): Component {
    el = el && inBrowser ? query(el) : undefined
    return mountComponent(this, el, hydrating)
  }
`
