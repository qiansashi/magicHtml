<template>
  <div class="vue-container">
    <div class="top-area">
      <div class="left-area">
        <div class="logo-area">
          <div class="logo-img">
            <el-image class="logo-front" :src='logoFrontSrc'></el-image>
            <el-image class="logo-rear" :src='logoRearSrc'></el-image>
          </div>
        </div>
        <ToolBar class="tool-bar"></ToolBar>
        <NodeTreeBar class="node-tree-bar"></NodeTreeBar>
      </div>
      <div class="right-area">
        <TopBar class="top-bar"></TopBar>
        <div class="middle-wrapper">
          <StyleBar class="style-bar"></StyleBar>
          <PreviewDashboard class="preview-dash"></PreviewDashboard>
          <HTMLDashboard class="html-dash"></HTMLDashboard>
        </div>
      </div>
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
      logoFrontSrc: require('@/assets/img/magic_white.png'),
      logoRearSrc: require('@/assets/img/html_black.png')
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
  height: 100%;
  background-color: #f5f7f9;
}
.top-bar{
  height: 60px;
}
.top-area{
  height:100%;
  display: flex;
}
.middle-wrapper{
  height: 85%;
  display: flex;
  margin-left: 28px;
  margin-top: 3px;
}
.left-area{
  width: 11%;
  height: 100%;
}
.right-area{
  width: 100%;
  background-color: #f5f7f9;
}
.tool-bar{
  height: 25%;
}
.node-tree-bar{
  height: 67%;
}
.logo-img{
  display: table-cell;
  vertical-align: middle;
}
.logo-front,.logo-rear{
  width: 36%;
}
.logo-area{
  height: 60px;
  display: table;
  box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 2px;
}
.style-bar,.top-bar,.top-area{
  background-color: white;
}
.preview-dash{
  width: 70%;
  margin-right: 28px;
}
.bottom-bar{
  position: absolute;
  bottom: 0;
  width: 100%;
  color: #383b3d96;
  font-size: 15px;
}
</style>
