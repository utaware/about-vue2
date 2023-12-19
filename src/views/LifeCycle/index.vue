<template>
  <div class="life-cycle page">
    <el-card>
      <div slot="header" class="flex">
        <h2>生命周期</h2>
      </div>
      <el-tabs type="border-card">
        <el-tab-pane
          v-for="{ name, source } in lifeCycleOptions"
          :key="name"
          :label="name"
        >
          <el-collapse>
            <el-collapse-item
              v-for="{ title, content } in source"
              :title="title"
              :name="title"
              :key="title"
            >
              <VueCodeHighlight>
                {{ content }}
              </VueCodeHighlight>
            </el-collapse-item>
          </el-collapse>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
// components
import VueCodeHighlight from '@/components/VueCodeHighlight'
// js
import lifeCycleOptions from './options/life'

export default {
  name: 'LifeCyclePage',
  components: {
    VueCodeHighlight,
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
  margin: 0 auto;
  width: 1280px;
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
