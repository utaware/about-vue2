import { Button, Card, Collapse, CollapseItem, Tabs, TabPane } from 'element-ui'

const components = [Button, Card, Collapse, CollapseItem, Tabs, TabPane]

export default {
  install(vue) {
    components.forEach((comp) => {
      vue.use(comp)
    })
  },
}
