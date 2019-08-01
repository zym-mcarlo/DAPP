<template>
  <div class="home">
    <div class="card-group">
      <h1 class="title">购买</h1>
      <section class="content">
        <div class="table">
          <el-row :gutter="20" style="margin-bottom: 10px;">
            <el-col :span="6" :xs="12" :sm="10" :md="8" :xl="6">剩余</el-col>
            <el-col :span="6" :xs="12" :sm="10" :md="8" :xl="6">单价</el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6" :xs="12" :sm="10" :md="8" :xl="6">20 P106-1</el-col>
            <el-col :span="6" :xs="12" :sm="10" :md="8" :xl="6">100 DAI</el-col>
          </el-row>
        </div>

        <div class="buy">
          <el-input v-model="input" placeholder="请输入认购数量"></el-input>
          <span>P106-1</span>
        </div>

        <div class="comfirm">
          <div class="group">
            <label for="">需要支付：</label>
            <span>0 DAI</span>
          </div>
          <div class="group">
            <label for="">DAI 余额：</label>
            <span>-</span>
          </div>
          <div class="btn">
            <el-button type="primary">购买</el-button>
          </div>
        </div>
      </section>
    </div>

    <div class="card-group">
      <h1 class="title">介绍</h1>
      <section class="content">
        <div class="table">
          <el-row :gutter="20" style="margin-bottom: 10px;">
            <el-col :span="6">代币名称</el-col>
            <el-col :span="6">总发行量</el-col>
            <el-col :span="12">代币-矿机</el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">P106-1</el-col>
            <el-col :span="6">100</el-col>
            <el-col :span="12">1 P106-1=1台 P106-100 显卡矿机</el-col>
          </el-row>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/style/var'
  .card-group
    margin-bottom 10px
    h1.title
      font-size mainTitleSize
      color mainTextColor
      margin-left 16px
    .content
      border 1px solid border1
      padding 20px
      border-radius smallRadius
      .table
        color plainTextColor
      .buy
        margin-top 30px
        display flex
        align-items center
        .el-input
          width 50%
          margin-right 20px
      .comfirm
        margin-top 30px
        font-size plainTextSize
        color plainTextColor
        .group
          margin-bottom 10px
          label
            width 100px
      .btn
        margin-top 30px
</style>
