# vue2

## vue-cli

[docs](https://cli.vuejs.org/)

### command

> [source-code](https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli/bin/vue.js)

- `create <app-name>`(项目创建)
- `add <plugin> [pluginOptions]`(插件安装)
- `invoke <plugin> [pluginOptions]`(跳过插件安装,执行插件 generator)
- `inspect [paths...]`(检查项目配置)
- `serve`
- `build`
- `ui`(使用 GUI 安装和管理插件)
- `init <template> <app-name>`(初始化项目)
- `config [value]`(检查并修改配置)
- `outdated`(检查过时的 cli 服务/插件)
- `upgrade [plugin-name]`(更新 cli)
- `migrate [plugin-name]`(为已经安装的 cli 插件运行 migrator)
- `info`(输出环境信息)

### template

> init template 模板选项

- webpack
- webpack-simple
- browserify
- browserify-simple
- simple

### config file

> `vue.config.js`
