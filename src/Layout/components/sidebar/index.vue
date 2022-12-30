<template>
  <div class="sidebar-container">
    <el-icon class="collapse-box" @click="toggleMenu">
      <component :is="isCollapse ? 'Expand' : 'Fold'" />
    </el-icon>
    
    <el-menu
      default-active="1-1-1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-sub-menu index="1-1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Group One</span>
          </template>
          <el-menu-item index="1-1-1">item one</el-menu-item>
          <el-menu-item index="1-1-2">item two</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="1-2">
          <template #title><span>Group Two</span></template>
          <el-menu-item index="1-2-1">item three</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="1-3">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-3-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><Menu /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'


const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

function toggleMenu() {
  isCollapse.value = !isCollapse.value
}

const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.sidebar-container {
  position: relative;
  background-color: #fff;
  ::v-deep .el-menu {
    border-right-color: transparent;
  }
  .collapse-box {
    position: absolute;
    top: 30px;
    right: -44px;
    cursor: pointer;
    font-size: 20px;
    background-color: #fff;
    padding: 8px 12px;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
