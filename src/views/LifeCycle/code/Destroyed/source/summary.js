export default `
  // 1. _isBeingDestroyed = true 标记组件将要开始销毁
  // 2. remove(parent.$children, vm) 从父组件中卸载自身
  // 3. vm._watcher.teardown() 注销渲染watcher和其他watchers
  // 4. vm._data.__ob__.vmCount-- 从数据ob中删除引用
  // 5. vm._isDestroyed = true 标记组件已经销毁
  // 6. vm.__patch__(vm._vnode, null) 触发子组件的销毁钩子函数
  // 7. callHook(vm, 'destroyed') 调用destroyed钩子
  // 8. vm.$off() 销毁事件监听
`
