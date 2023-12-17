export default `
  // src/platforms/web/entry-runtime-with-compiler.js
  const mount = Vue.prototype.$mount
  Vue.prototype.$mount = function (
    el?: string | Element,
    hydrating?: boolean
  ): Component {
    el = el && query(el)

    /* istanbul ignore if */
    if (el === document.body || el === document.documentElement) {
      // 不能挂载在 body、html 这样的根节点上
      return this
    }

    const options = this.$options
    // resolve template/el and convert to render function
    // 当render不存在时, 尝试通过el和template转换为render
    if (!options.render) {
      let template = options.template
      if (template) {
        if (typeof template === 'string') {
          if (template.charAt(0) === '#') {
            template = idToTemplate(template)
          }
        } else if (template.nodeType) {
          template = template.innerHTML
        } else {
          // warn
          return this
        }
      } else if (el) {
        template = getOuterHTML(el)
      }

      if (template) {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
          mark('compile')
        }

        const { render, staticRenderFns } = compileToFunctions(template, {
          outputSourceRange: process.env.NODE_ENV !== 'production',
          shouldDecodeNewlines,
          shouldDecodeNewlinesForHref,
          delimiters: options.delimiters,
          comments: options.comments
        }, this)
        options.render = render
        options.staticRenderFns = staticRenderFns

      }
    }
    return mount.call(this, el, hydrating)
  }
`
