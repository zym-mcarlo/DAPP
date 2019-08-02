<template>
  <el-container class="app">
    <el-aside width="30vw" style="min-width: 300px;">
      <Aside></Aside>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import Aside from './components/Aside'

export default {
  components: {
    Aside
  }
}
</script>

<style lang="stylus" scoped>
.app
  height 100vh
</style>
