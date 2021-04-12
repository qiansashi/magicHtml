<template>
  <div class="vue-container">
    <div>
      <div class="vHtml" v-html="vHtml">{{vHtml}}</div>
    </div>
  </div>
</template>

<script>
import StyleBar from '../Tool/StyleBar'
export default {
  name: '',
  data () {
    return {

    }
  },
  components: {StyleBar},
  mounted () {},
  methods: {},
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
  height: 1080px;
  border-style: groove;
  border-color: grey;
}
</style>
