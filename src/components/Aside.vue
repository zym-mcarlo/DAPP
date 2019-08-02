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
      <el-tooltip class="item" effect="dark" :content="wallet" placement="top">
        <p class="title" style="cursor: pointer;">
            {{wallet || '未关联钱包' | formatEllipsis}}
        </p>
      </el-tooltip>
      <div v-if="isAuthentication" class="content">
        <div class="balance">
          <label for="">持有：</label>
          <span>{{balance | format}} P106-1</span>
        </div>
        <p class="hint">DAI 余额： {{daiBalance | format}}</p>
        <div class="get">
          <label for="">待领取收益：</label>
          <span>{{daiCanReceive | format}} DAI</span>
        </div>
      </div>
      <div v-else class="content">
        <img src="@/assets/image/black-chain.png" alt="" width="100px">
      </div>
      <div class="btn">
        <el-button type="primary" plain v-if="isAuthentication" @click="withdraw_()" :icon="withdrawState ? 'el-icon-loading' : ''">领取收益</el-button>
        <el-button type="danger" v-else @click="relevanceWallet_()" :icon="relevanceState ? 'el-icon-loading' : ''">关联钱包</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import abiMbf from '@/assets/abi/MBFToken'
import abiMbt from '@/assets/abi/IERC20Token.json'

export default {
  data () {
    let contractMbf = new this.$web3.eth.Contract(abiMbf, this.mbf)
    let contractMbt = new this.$web3.eth.Contract(abiMbt, this.mbt)
    return {
      contractMbf: contractMbf,
      contractMbt: contractMbt,
      isAuthentication: false,
      balance: 0,
      daiBalance: 0,
      daiCanReceive: 0,

      relevanceState: false,
      withdrawState: false
    }
  },
  created () {
    this.init_()
    this.$root.$on('getBalance_', () => {
      this.getP106Balance_()
      this.getDaiBalance_()
    })
  },
  filters: {
    format (val) {
      return (val / 1e18).toFixed(5)
    },
    formatEllipsis (val) {
      if (val.length < 20) return val
      return val.slice(0, 10) + '...' + val.slice(-10, -1)
    }
  },
  computed: {
    wallet () {
      return this.$store.wallet
    }
  },
  watch: {
    wallet () {
      this.init_()
    }
  },
  methods: {
    init_ () {
      if (this.wallet) {
        this.isAuthentication = true
        this.getP106Balance_()
        this.getDaiCanReceive_()
        this.getDaiBalance_()
      } else {
        this.isAuthentication = false
      }
    },
    getP106Balance_ () {
      this.contractMbf.methods.balanceOf(this.wallet).call().then(res => {
        this.balance = res
      }).catch(err => {
        this.$message({ message: err.message, type: 'error' })
      })
    },
    getDaiBalance_ () {
      this.contractMbt.methods.balanceOf(this.wallet).call().then(res => {
        this.daiBalance = res
      }).catch(err => {
        this.$message({ message: err.message, type: 'error' })
      })
    },
    getDaiCanReceive_ () {
      this.contractMbf.methods.profitOf(this.wallet).call().then(res => {
        this.daiCanReceive = res
      }).catch(err => {
        this.$message({ message: err.message, type: 'error' })
      })
    },
    relevanceWallet_ () { // 关联钱包
      this.relevanceState = true
      this.$web3.currentProvider.enable().then(res => {
        this.$store.wallet = res[0]
        this.relevanceState = false
        this.init_()
      }).catch(err => {
        this.relevanceState = false
        this.$message({ message: err.message, type: 'error' })
      })
    },
    withdraw_ () { // 领取收益
      this.withdrawState = true
      this.contractMbf.methods.withdraw().send({
        from: this.wallet
      }).then(res => {
        this.withdrawState = false
        this.getDaiCanReceive_()
        this.getDaiBalance_()
      }).catch(err => {
        this.withdrawState = false
        this.$message({ message: err.message, type: 'error' })
      })
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
            color #ffffff
      .btn
        margin-top 30px
        text-align center
</style>
