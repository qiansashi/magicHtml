<template>
  <div class="vue-container">
    <div class="topbar-wrapper" :style="style">
      <Setup class="setup"></Setup>
      <div class="logo-img">
        <el-image class="logo-front" :src='logoFrontSrc' :fit='contain'></el-image>
        <el-image class="logo-rear" :src='logoRearSrc'></el-image>
      </div>
      <div class="edit-btn">
        <div class="do-btn">
          <el-button class="redo-btn" circle><i class="el-icon-back"/></el-button>
          <el-button class="undo-btn" circle><i class="el-icon-right"/></el-button>
        </div>
        <el-button class="generate-btn" round>
          <i class="el-icon-upload">生成</i>
        </el-button>
        <div class="user-avatar">
          <el-avatar icon="el-icon-user-solid"></el-avatar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Setup from '../Setup/Setup'
export default {
  name: 'TopBar',
  data () {
    return {
      style: ''
      // style: 'background: -webkit-linear-gradient(left, #000000, #A8A7A3); /* Safari 5.1 - 6.0 */ background: -o-linear-gradient(right, #000000, #A8A7A3); /* Opera 11.1 - 12.0 */ background: -moz-linear-gradient(right, #000000, #A8A7A3); /* Firefox 3.6 - 15 */ background: linear-gradient(to right, #000000, #A8A7A3); /* 标准的语法（必须放在最后） */',
      // logoFrontSrc: require('@/assets/img/magic_white.png'),
      // logoRearSrc: require('@/assets/img/html_black.png')

    }
  },
  components: {Setup},
  mounted () {},
  methods: {}
}
</script>

<style scoped>
.topbar-wrapper{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 45px;
  border-radius: 0px 0px 20px 20px;
}
.setup{
  width: 50px;
}
.logo-front,.logo-rear{
  width: 95px;
}
.edit-btn{
  display: flex;
}
</style>
