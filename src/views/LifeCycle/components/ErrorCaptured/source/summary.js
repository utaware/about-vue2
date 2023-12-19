export default `
  // 递归查找当前组件的父组件, 依次调用errorCaptured方法
  // 单个errorCaptured钩子能够返回false以阻止错误继续向上传播
  // 如果全局的config.errorHandler被定义
  // 在没有被阻止的情况下通过globalHandleError(err, vm, info)调用
`
