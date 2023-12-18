export default `
  // 当调用$destroy方法时, 触发beforeDestroy钩子
  // $destroy的调用则是在componentVNodeHooks的destroy函数中
  // 当组件实例被销毁时, 判断是否为keep-alive组件
  // 如果不是keep-alive组件则直接销毁
  // 如果是keep-alive组件则停用

  // 1. componentVNodeHooks
  // 2. hooksToMerge
  // 3. installComponentHooks
  // 4. createComponent
  // 5. _createElement
  // 6. createElement
  // 7. _c, $createElement => initRender
  // 8. _render => renderMixin
`
