<template>
  <div class="vue-container">
    <el-input type="textarea"
    class="code-block"
    rows=40
    v-model="htmlTxt"></el-input>
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
  height: 1080px;
  border-style: groove;
  border-color: grey;

}
.code-block{
  height: 75%;
}
</style>
