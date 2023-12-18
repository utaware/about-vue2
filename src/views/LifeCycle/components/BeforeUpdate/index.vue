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
import callHookCode from './source/callHook'
import watcherCode from './source/watcher'
import schedulerCode from './source/scheduler'
import summaryCode from './source/summary'

export default {
  name: 'BeforeUpdateHooks',
  components: {
    VueCodeHighlight,
  },
  data() {
    return {
      // collapse
      activeNames: [],
      // code
      sourceCodeList: [
        { title: 'callHook', content: callHookCode },
        { title: 'watcher', content: watcherCode },
        { title: 'scheduler', content: schedulerCode },
        { title: 'summary', content: summaryCode },
      ],
    }
  },
  props: {},
  methods: {},
}
</script>

<style scoped lang="scss"></style>
