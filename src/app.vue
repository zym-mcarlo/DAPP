<template>
  <el-container class="app">
    <el-aside class="aside" width="30vw">
      <Aside></Aside>
    </el-aside>
    <el-main class="main">
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
  .aside
    min-width 300px
</style>

<style lang="stylus" scoped>
@media(max-width: 760px)
  .app
    flex-direction column
    .aside
      width 100% !important
    .main
      overflow unset
</style>
