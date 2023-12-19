export default `

  // mount.js
  // 在initMixin中完成created过程后调用$mount进行挂载

  // 在挂载前需要确定render
  // 没有定义render时将尝试通过el和template进行转换
  // 1. 首先排除el为body和html这样根节点的情况
  // 2. 尝试通过template作为id选择器获取HTML(idToTemplate)
  // 3. 尝试通过template作为node节点获取HTML
  // 4. 如果template也不存在, 尝试通过el选项获取HTML
  // 5. 将获取的HTML通过compileToFunctions转换为render
`
