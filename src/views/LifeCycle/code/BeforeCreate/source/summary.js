export default `
  // callHook主要包括合并合并options

  // 接着执行三个函数

  // initLifecycle
  // 初始化实例属性:
  // $parent, $children, $root, $refs
  // _watcher
  // _inactive, _directInactive, _isMounted, _isDestroyed, _isBeingDestroyed

  // initEvents
  // 初始化实例属性：
  // _events, _hasHookEvent

  // initRender
  // 初始化实例属性：
  // _vnode, _staticTrees
  // $slots, $scopedSlots
  // _c, $createElement
  // $attrs, $listeners

  // 区别: $createElement 和 _c
  // $createElement 供手写的render函数使用
  // _c 供模板编译成的render函数使用
  // 都是调用createElement方法
  // 只是最后的alwaysNormalize参数不同
  // 在执行_createElement中会做区分
  // $createElement -> normalizeChildren
  // _c -> simpleNormalizeChildren
  // 其作用均是规范化children
  // normalizeChildren会需要针对2种场景进行处理
  // 1. 针对基础类型创建单个文本节点
  // 2. 当编译slot, v-for产生嵌套数组时递归转换成VNode(createTextVNode(text) || VNode)
`
