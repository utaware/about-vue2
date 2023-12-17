<template>
  <div class="life-cycle page">
    <el-card>
      <div slot="header" class="flex">
        <h2>生命周期</h2>
      </div>
      <el-tabs type="border-card">
        <el-tab-pane
          v-for="{ name } in lifeCycleOptions"
          :key="name"
          :label="name"
        >
          <beforeCreate></beforeCreate>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import lifeCycleOptions from './options/life'
import beforeCreate from './components/BeforeCreate'

export default {
  name: 'LifeCyclePage',
  components: {
    beforeCreate,
  },
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
