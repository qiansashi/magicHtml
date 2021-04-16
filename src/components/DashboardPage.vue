<template>
  <div class="vue-container">
    <TopBar class="top-bar"></TopBar>
    <div class="middle-wrapper">
      <div class="left-area">
        <ToolBar class="tool-bar"></ToolBar>
        <NodeTreeBar class="node-tree-bar"></NodeTreeBar>
      </div>
      <StyleBar class="style-bar"></StyleBar>
      <PreviewDashboard class="preview-dash"></PreviewDashboard>
      <HTMLDashboard class="html-dash"></HTMLDashboard>
    </div>
    <BottomBar class="bottom-bar"></BottomBar>
  </div>
</template>

<script>
import ToolBar from './Tool/ToolBar'
import TopBar from './Common/TopBar'
import BottomBar from './Common/BottomBar'
import NodeTreeBar from './NodeTree/NodeTreeBar'
import StyleBar from './Tool/StyleBar'
import PreviewDashboard from './Core/PreviewDashboard'
import HTMLDashboard from './Core/HTMLDashboard'
export default {
  name: 'dashboardPage',
  data () {
    return {

    }
  },
  components: {
    ToolBar, TopBar, BottomBar, NodeTreeBar, StyleBar, PreviewDashboard, HTMLDashboard
  },
  mounted () {},
  methods: {}
}
</script>

<style scoped>
.vue-container{
  border: 0;
}
.top-bar{
  height: 62px;
}
.middle-wrapper{
  display: flex;

}
.left-area{
  width:9%;
  height: 800px;
}
</style>
