<template>
  <div class="vue-container">
    <div class="html-ins">
      <span class="html-name">html代码预览</span>
    </div>
    <el-input type="textarea"
    class="code-block"
    rows=25
    v-model="htmlTxt"></el-input>
    <div class="selected-div-wrapper">
      <div class="tag">当前选中节点概览</div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      // htmlTxt: this.$store.state.data
    }
  },
  components: {},
  mounted () {},
  methods: {},
  computed: {
    htmlTxt () {
      console.log(this.$store.state.htmlData)
      return this.$store.state.htmlData
    }

  },
  watch: {
  }
}
</script>

<style scoped>
.vue-container{
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  width: 18%;
  height: 800px;
  border-style: groove;
  border-color: grey;

}
.html-ins{
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  height: 38px;
  border-radius: 0 0 25px 25px;
  margin-bottom: 3px;
}
.html-name{
  line-height: 38px;
}
.code-block{
  height: 75%;
}
</style>
