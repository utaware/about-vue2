export default `
  // 1. 在mountComponent实例化渲染watcher
  // 2. 渲染watcher中包含before选项
  // 3. 当数据更新时(setter), dep调用notify, notify调用wacher的update
  // 4. 在watcher执行update过程时调用queueWatcher
  // 5. queueWatcher中判断watcher是否被处理
  // 6. 若没有则将watcher存入queue队列中, 并调用flushSchedulerQueue
  // 7. flushSchedulerQueue给queue排序后, 遍历queue队列
  // 8. 相应的watcher有before属性则触发watcher.before()钩子函数beforeUpdate
  // 9. 接着调用watcher.run()
  // 10. 完成之后触发actived和updated钩子函数
`
