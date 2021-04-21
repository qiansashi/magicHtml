<template>
  <div class="vue-container">
    <div class="html-ins">
      <span class="html-name">html代码预览</span>
      <el-button type="text" style="color:white"
      v-clipboard:copy="copyHtml"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError"><i class="el-icon-copy-document"></i></el-button>
    </div>
    <el-input type="textarea"
    class="code-block"
    rows=35
    v-model="htmlTxt"></el-input>
    <div class="selected-div-wrapper">
      <div class="tag">当前选中节点概览</div>

    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      // htmlTxt: this.$store.state.data
      copyHtml: this.$store.getters.getHtmlData
    }
  },
  components: {},
  mounted () {},
  methods: {
    onCopy: function (e) {
      this.$message({
        message: '复制到剪贴板成功！',
        type: 'success'
      })
    },
    onError: function (e) {
      this.$message({
        message: '复制失败！',
        type: 'warning'
      })
    }
  },
  computed: {
    htmlTxt () {
      console.log(this.$store.getters.getHtmlData)
      return this.$store.getters.getHtmlData
    }

  },
  watch: {
  }
}
</script>

<style scoped>
.vue-container{
  width: 18%;
  height: 100%;
  border-style: groove;
  border-color: grey;
  background-color:white;
}
.html-ins{
  background-color: #409EFF;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  height: 38px;
  border-radius: 0 0 4px 4px;
  margin-bottom: 3px;
}
.html-name{
  color: white;
  line-height: 38px;
}
.code-block{
  height: 70%;
  width: 95%;
}
.tag{
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  width: 90%;
  height: 200px;
  border-radius: 4px;
  margin: 0 auto;
}
.selected-div-wrapper{
  margin-top: 50px;
}
</style>
