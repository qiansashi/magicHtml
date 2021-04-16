<template>
  <div class="vue-container">
    <div class="v-html-top-bar">
      <div class="preview-txt">html预览</div>
      <div class="mode-select">
        <el-button class="save-select" type="text" @click="saveFile"><i class="el-icon-bottom" /></el-button>
        <el-button class="pc-select" type="text" @click="pcAlert"><i class="el-icon-monitor" /></el-button>
        <el-button class="mobile-select" type="text" @click="mobileAlert"><i class="el-icon-mobile" /></el-button>
      </div>
    </div>
    <div class="v-html-wrapper">
      <div class="v-html" v-html="vHtml">{{vHtml}}</div>
    </div>
  </div>
</template>

<script>
import './PreviewDashboard.css'
import $ from 'jquery'
export default {
  name: '',
  data () {
    return {

    }
  },
  components: {},
  mounted () {},
  methods: {
    pcAlert () {
      // console.log($('.v-html').width())
      if ($('.v-html').width() === 1272) {
        this.$message({
          message: '当前已经处于pc模式了哦~',
          type: 'warning'
        })
      } else {
        $('.v-html').width(1272)
        this.$message({
          message: '已切换为pc模式预览',
          type: 'success'
        })
      }
    },
    mobileAlert () {
      // console.log($('.v-html').width())
      if ($('.v-html').width() === 414) {
        this.$message({
          message: '当前已经处于手机模式了哦~',
          type: 'warning'
        })
      } else {
        $('.v-html').width(414)
        $('.v-html').height(736)
        this.$message({
          message: '已切换为手机模式预览',
          type: 'success'
        })
      }
    },
    saveFile () {

    }
  },
  computed: {
    vHtml () {
      return (this.$store.state.htmlData)
    }
  }
}
</script>

<style scoped>
.vue-container{
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  width: 1920px;
  height: 800px;
  border-style: groove;
  border-color: grey;
}
.v-html{
  display: flex;
  justify-content: center;
  /* margin-top: 10px; */
  width: 1280px;
  margin: 0 auto;
  border: 1px;
  border-style: dotted;
  padding: 3px;
}
.v-html-top-bar{
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  border-radius: 0 0 25px 25px;
  height: 38px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px 10px 20px;
  margin-bottom: 15px;
}
.preview-txt{
  margin-left: 15px;
}
.pc-select,.mobile-select,.save-select{
  font-size: 18px;
  padding: 0px;
  margin-bottom: 12px;
}
</style>
