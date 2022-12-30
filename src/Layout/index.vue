<template>
  <div class="layout-container">
    <sidebar />
    <div class="main-box">
      <Header />
      <div class="app-main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from './components/sidebar/index.vue'
import Header from './components/Header.vue'
export default defineComponent({
  name: 'Layout',
  components: {
    Header,
    Sidebar
  },
  setup() {
  }
})
</script>

<style lang="scss" scoped>
.layout-container {
  display: flex;
  height: 100vh;
  .main-box {
    flex-grow: 1;
    margin-left: 46px;
    display: flex;
    flex-direction: column;
    .app-main {
      flex-grow: 1;
    }
  }
}
</style>
