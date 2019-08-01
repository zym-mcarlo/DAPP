<template>
  <div class="aside">
    <div class="header">
      <p class="title">
        <img src="@/assets/image/logo.png" alt="" width="36">
        <span>P106-1</span>
      </p>
      <p class="hint">价值流转，矿机永存</p>
    </div>

    <div class="account">
      <p class="title">账户</p>
      <div v-if="isAuthentication" class="content">
        <div class="balance">
          <label for="">持有：</label>
          <span>2 P106-1</span>
        </div>
        <p class="hint">相当于 2 台 P106-100（8卡）显卡矿机</p>
        <div class="get">
          <label for="">待领取收益：</label>
          <span>20.66 DAI</span>
        </div>
      </div>
      <div v-else class="content">
        <img src="@/assets/image/black-chain.png" alt="" width="100px">
      </div>
      <div class="btn">
        <el-button type="primary" plain v-if="isAuthentication">领取收益</el-button>
        <el-button type="danger" v-else>关联钱包</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isAuthentication: true
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/style/var'
  .aside
    height 100%
    color #ffffff
    background mainColor
    clear both
    &::before
      display block
      height 1px
      content ''
      zoom 1
    .header
      padding 10px 0
      padding-bottom 20px
      border-bottom 1px solid #2A88E9
      p.title
        margin-bottom 0
        font-size mainTitleSize
        display flex
        align-items center
        justify-content center
        img
          margin-right 14px
      .hint
        font-size smallTextSize
        text-align center
        opacity 0.7
    .account
      p.title
        font-size plainTitleSize
        text-align center
        margin-top 50px
        margin-bottom 30px
      .content
        height 180px
        display flex
        align-items center
        flex-direction column
        justify-content center
        .balance
          background #227DDB
          padding 10px 20px
          font-size plainTextSize
          border-radius plainRadius
          width max-content
          margin 0 auto
        .hint
          font-size smallTextSize
          text-align center
          opacity 0.7
        .get
          margin-top auto
          display flex
          align-items center
          justify-content center
          font-size plainTextSize
          span
            color dangerColor
      .btn
        margin-top 30px
        text-align center
</style>
