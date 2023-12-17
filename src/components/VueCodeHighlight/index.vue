<template>
  <div class="code-highlight" ref="codeBlock">
    <pre :class="languageClass">
      <code>
        <slot></slot>
      </code>
    </pre>
  </div>
</template>

<script>
import 'prismjs/themes/prism-tomorrow.min.css'

import './custom/index.scss'

import prismjs from 'prismjs'

export default {
  name: 'VueCodeHighlight',
  components: {},
  data() {
    return {}
  },
  props: {
    language: {
      type: String,
      default: 'javascript',
    },
  },
  computed: {
    languageClass() {
      return `language-${this.language}`
    },
  },
  methods: {},
  mounted() {
    prismjs.highlightAllUnder(this.$refs.codeBlock)
  },
}
</script>

<style scoped lang="scss"></style>
