<template>
  <header>
    <h1>header{{ myWin.console.log(route.query) }}</h1>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const myWin = ref(window)
</script>

<style lang="scss" scoped>
header {
  height: 54px;
  h1 {
    height: 100%;
  }
}
</style>
