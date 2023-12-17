<template>
  <div class="life-cycle page">
    <el-card>
      <div slot="header" class="flex">
        <h2>生命周期</h2>
      </div>
      <el-tabs type="border-card">
        <el-tab-pane
          v-for="{ name, component } in lifeCycleOptions"
          :key="name"
          :label="name"
        >
          <components :is="component"></components>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import lifeCycleOptions from './options/life'

export default {
  name: 'LifeCyclePage',
  components: {},
  data() {
    return {
      lifeCycleOptions,
    }
  },
  props: {},
  methods: {},
}
</script>

<style scoped lang="scss">
.flex {
  display: flex;
}
.life-cycle {
  margin: 0 auto;
  width: 1140px;
  &-list {
    padding-left: 1em;
    list-style: disc;
    text-align: left;
    .item {
      line-height: 2em;
      .text {
        cursor: pointer;
      }
    }
  }
}
</style>
