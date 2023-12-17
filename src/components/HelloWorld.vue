<template>
  <div class="container">
    <VueCodeHighlight>
      let isPalindrome = (word) => { let [length, result] = [word.length, true];
      for (let i = 0; i &lt; length / 2; i++) { if (word[i] !== word[length - 1
      - i]) result = false; } return result; } module.exports = isPalindrome;
    </VueCodeHighlight>
  </div>
</template>

<script>
import VueCodeHighlight from './VueCodeHighlight'

export default {
  name: 'HelloWorld',
  components: {
    VueCodeHighlight,
  },
  props: {
    msg: String,
  },
}
</script>

<style scoped></style>
