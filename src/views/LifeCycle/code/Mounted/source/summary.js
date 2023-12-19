export default `
  // 挂载完成分为两部分

  // 根实例在通过beforeMount后定义updateComponent
  // 分为_render和_update两部分
  // vm._render 方法先生成虚拟 Node
  // vm._update 更新 DOM
  // 再实例化一个渲染Watcher
  // 立即执行一次updateComponent获得初次渲染内容
  // 当渲染模板中依赖的变量发生变化时再次执行以此刷新视图
  // 之后判断为根实例, 触发mounted钩子

  // 组件实例则是在componentVNodeHooks的insert钩子中触发
`
