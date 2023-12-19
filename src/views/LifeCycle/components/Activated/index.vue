<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item
      v-for="{ title, content } in sourceCodeList"
      :title="title"
      :name="title"
      :key="title"
    >
      <VueCodeHighlight>
        {{ content }}
      </VueCodeHighlight>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
// components
import VueCodeHighlight from '@/components/VueCodeHighlight'
// code
// import callHookCode from './source/callHook'
// import initInjectionsCode from './source/initInjections'
// import initStateCode from './source/initState'
// import initProvideCode from './source/initProvide'
// import summaryCode from './source/summary'

export default {
  name: 'ActivatedHooks',
  components: {
    VueCodeHighlight,
  },
  data() {
    return {
      // collapse
      activeNames: [],
      // code
      sourceCodeList: [
        // { title: 'callHook', content: callHookCode },
        // { title: 'initInjections', content: initInjectionsCode },
        // { title: 'initState', content: initStateCode },
        // { title: 'initProvide', content: initProvideCode },
        // { title: 'summary', content: summaryCode },
      ],
    }
  },
  props: {},
  methods: {},
}
</script>

<style scoped lang="scss"></style>
