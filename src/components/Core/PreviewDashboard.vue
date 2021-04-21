<template>
  <div class="vue-container">
    <div class="v-html-top-bar">
      <div class="left-wrapper">
        <div class="preview-txt">html预览</div>
        <el-button class="save-select" type="text" @click="saveFile"><i class="el-icon-bottom" /></el-button>
      </div>
      <div class="mode-select">
        <el-button class="pc-select" type="text" @click="pcAlert"><i class="el-icon-monitor" /></el-button>
        <el-button class="mobile-select" type="text" @click="mobileAlert"><i class="el-icon-mobile" /></el-button>
      </div>
    </div>
    <div class="line"></div>
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
  mounted () {
  },
  methods: {
    pcAlert () {
      // console.log($('.v-html').width())
      if ($('.v-html').width() === 972) {
        this.$message({
          message: '当前已经处于pc模式了哦~',
          type: 'warning'
        })
      } else {
        $('.v-html').width(972)
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
      return (this.$store.getters.getHtmlData)
    }
  }
}
</script>

<style scoped>
.vue-container{
  height: 100%;
  background-color: white;
}
.left-wrapper{
  display: flex;
}
.left-wrapper button{
  margin-left: 15px;
}
.v-html{
  display: flex;
  justify-content: center;
  /* margin-top: 10px; */
  width: 90%;
  height: 800px;
  margin: 0 auto;
  border: 1px;
  border-style: dotted;
  overflow: auto;
}
.v-html-top-bar{
  height: 38px;
  background-color: #f5f7f9;
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
.line{
  margin: 15px 12px 14px 0;
  border-top: 1px solid #d1dbe5;
}
.v-html-wrapper{
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  width: 98%;
  height: 90%;
  margin: 0 0 0 7px;
  border-radius: 4px;
  padding: 60px 0 0 0;
}
</style>
