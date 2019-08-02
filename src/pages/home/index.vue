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
            <el-col :span="6" :xs="12" :sm="10" :md="8" :xl="6">{{residueP106 | format}} P106-1</el-col>
            <el-col :span="6" :xs="12" :sm="10" :md="8" :xl="6">{{singlePrice | format}} DAI</el-col>
          </el-row>
        </div>

        <div class="buy">
          <el-input placeholder="请输入认购数量" v-model="buyNum"></el-input>
          <span>P106-1</span>
        </div>

        <div class="comfirm">
          <div class="group">
            <label for="">需要支付：</label>
            <span v-if="singlePrice">{{buyNum * singlePrice | format}} DAI</span>
          </div>
          <div class="group">
            <label for="">DAI 授权：</label>
            <el-button v-if="!isAuthorization" type="primary" @click="authorization_()" :icon="authorizationState ? 'el-icon-loading' : ''">授权</el-button>
            <el-button v-else type="info" disabled>已授权</el-button>
          </div>
          <div class="btn">
            <el-button type="primary" @click="buy_()" :icon="buyState ? 'el-icon-loading' : ''">购买</el-button>
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
            <el-col :span="6">{{maxSupply | format}}</el-col>
            <el-col :span="12">1 P106-1=1台 P106-100 显卡矿机</el-col>
          </el-row>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import abiMbf from '@/assets/abi/MBFToken'
import abiMbt from '@/assets/abi/IERC20Token.json'
const BigNumber = require('bignumber.js')

export default {
  data () {
    let contractMbf = new this.$web3.eth.Contract(abiMbf, this.mbf)
    let contractMbt = new this.$web3.eth.Contract(abiMbt, this.mbt)
    return {
      contractMbf: contractMbf,
      contractMbt: contractMbt,
      singlePrice: 0,
      residueP106: 0,
      maxSupply: 0,
      buyNum: '',
      isAuthorization: false,

      buyState: false,
      authorizationState: false
    }
  },
  created () {
    this.init_()
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
  filters: {
    format (val) {
      return (val / 1e18).toFixed(5)
    }
  },
  methods: {
    init_ () {
      if (this.wallet) {
        this.isAuthentication = true
        this.getTargetPrice_()
        this.getResidueP106_()
        this.getAuthorizationState_()
      } else {
        this.isAuthentication = false
      }
    },
    getTargetPrice_ () { // 获取单价
      this.contractMbf.methods.targetPrice().call().then(res => {
        this.singlePrice = res
      }).catch(err => {
        this.$notify({
          title: '获取单价失败',
          message: err.message,
          duration: 0,
          type: 'error'
        })
      })
    },
    getAuthorizationState_ () { // 获取授权状态
      this.contractMbt.methods.allowance(this.wallet, this.mbf).call().then(res => {
        this.isAuthorization = Number(res) > 0
      }).catch(err => {
        this.$notify({
          title: '获取授权状态失败',
          message: err.message,
          duration: 0,
          type: 'error'
        })
      })
    },
    authorization_ () { // 授权
      this.authorizationState = true
      this.contractMbt.methods.approve(this.mbf, this.canUse).send({
        from: this.wallet
      }).then(res => {
        this.authorizationState = false
        this.getAuthorizationState_()
      }).catch(err => {
        this.authorizationState = false
        this.$message({ message: err.message, type: 'error' })
      })
    },
    getResidueP106_ () { // 获取剩余 p106
      this.contractMbf.methods.maxSupply().call().then(resMax => {
        this.maxSupply = resMax
        this.contractMbf.methods.totalSupply().call().then(resTotal => {
          this.residueP106 = resMax - resTotal
        }).catch(err => {
          this.$notify({
            title: '获取剩余数量出错',
            message: err.message,
            duration: 0,
            type: 'error'
          })
        })
      }).catch(err => {
        this.$message({ message: err.message, type: 'error' })
      })
    },
    buy_ () { // 购买 p106
      if (!this.buyNum || !Number(this.buyNum)) {
        this.$message({ message: '输入的数量有误', type: 'warning' })
        return
      }
      this.buyState = true
      let ctkRequired = BigNumber(this.buyNum).times(this.e18).toFixed()
      this.contractMbf.methods.join(ctkRequired).send({
        from: this.wallet
      }).then(res => {
        this.buyState = false
        this.$message({ message: '貌似购买成功了', type: 'success' })
        this.$root.$emit('getBalance_')
      }).catch(err => {
        this.buyState = false
        this.$message({ message: err.message, type: 'error' })
      })
    }
  }
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
