import { Button, Collapse } from 'element-ui'

const components = [Button, Collapse]

export default {
  install(vue) {
    components.forEach((comp) => {
      vue.use(comp)
    })
  },
}
