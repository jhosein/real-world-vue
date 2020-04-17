<template>
  <div>
    <h1 @click="handler(arg, event)">test</h1>
    <ul>
      <ui></ui>
    </ul>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      key: 'value'
    }
  }
}
</script>

<style></style>
