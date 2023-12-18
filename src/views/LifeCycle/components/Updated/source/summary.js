export default `
  // 在flushSchedulerQueue依次遍历watcher
  // 通过before属性触发beforeUpdate钩子
  // 在遍历完成后, 调用callUpdatedHooks
  // 确认存在渲染watcher且已挂载并且没有被销毁时
  // 触发updated钩子
`
