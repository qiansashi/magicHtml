/* eslint-disable vue/valid-v-for */
<template>
  <div class="vue-container">
    <div class="tool-ins">
      <span class="tool-name">工具栏</span>
    </div>
    <el-scrollbar class="el-scroller">
      <el-tabs class="tool-eltabs" type="card" v-model="firstName" @tab-click="tapClick">
        <el-tab-pane class="basic-tool" label="html基础组件" name="basicTool">
          <div class="btn-wrapper">
            <el-button class="div-btn" type="text" @click="divClick">
              <i class="el-icon-reading"></i>
              <div class="div-txt">div</div>
            </el-button>
          </div>
          <div class="btn-wrapper">
            <el-dropdown class="h-dropdown" @command="handleCommand">
              <i class="el-icon-view"></i>
              <span class="el-dropdown-link">h</span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="item in hList" :key="item.id" :command="item.h">
                  <i class="el-icon-view"/>{{item.h}}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="btn-wrapper">
            <el-button class="p-btn" type="text" @click="pClick">
              <i class="el-icon-view"></i>
              <div class="p-txt">p</div>
            </el-button>
          </div>
          <div class="btn-wrapper">
            <el-button class="btn-btn" type="text" @click="btnClick">
              <i class="el-icon-view"></i>
              <div class="btn-txt">button</div>
            </el-button>
          </div>
          <div class="btn-wrapper">
            <el-button class="nav-btn" type="text" @click="navClick">
              <i class="el-icon-view"></i>
              <div class="btn-txt">nav</div>
            </el-button>
          </div>

        </el-tab-pane>
        <el-tab-pane class="bootstrap-tool" label="Bootstrap组件" name="bootstrapTool">

        </el-tab-pane>
        <el-tab-pane class="bootstrap-css" label="Bootstrap布局" name="bootstrapCss">
          <el-button class="com-btn" type="text" @click="comClick">模板1</el-button>
        </el-tab-pane>
      </el-tabs>
    </el-scrollbar>
  </div>
</template>

<script>
import { addLabelModel, addNavModel, addComponentModel } from '../../vuex/htmlLabel'
import {increaseNodeId} from '../../vuex/node'
import './ToolBar.css'
export default {
  name: 'ToolBar',
  data () {
    return {
      firstName: 'basicTool',
      hList: [{h: 'h1'}, {h: 'h2'}, {h: 'h3'}, {h: 'h4'}, {h: 'h5'}, {h: 'h6'}]
    }
  },
  components: {},
  mounted () {},
  methods: {
    tapClick (tab, event) {
      console.log(tab, event)
    },
    divClick () {
      this.$store.commit('mutationsNewNode', addLabelModel('div'))
      this.$message({
        message: '选中div标签',
        type: 'success'
      })
    },
    handleCommand (command) {
      this.$store.commit('mutationsNewNode', addLabelModel(command, '【HTML 标题】我是一个粉刷匠'))
      this.$message({
        message: '选中' + command + '标签',
        type: 'success'
      })
    },
    pClick () {
      this.$store.commit('mutationsNewNode', addLabelModel('p', '【HTML 段落】粉刷本领强~'))
      this.$message({
        message: '选中p标签',
        type: 'success'
      })
    },
    btnClick () {
      this.$store.commit('mutationsNewNode', addLabelModel('button', '这是一个button', ' border-radius: 30px;border-width: 1.8px;border-color: #409EFF;color: #409EFF;background: none;'))
      this.$message({
        message: '选中button标签',
        type: 'success'
      })
    },
    navClick () {
      this.$store.commit('mutationsNewNode', addNavModel(increaseNodeId(this.$store.state.nodeData, this.$store.state.selectedData.id)))
      this.$message({
        message: '选中nav标签',
        type: 'success'
      })
    },
    comClick () {
      this.$store.commit('mutationsNewNode', addComponentModel(increaseNodeId(this.$store.state.nodeData, this.$store.state.selectedData.id)))
      this.$message({
        message: '选中模板',
        type: 'success'
      })
    }
  },
  computed: {}
}
</script>

<style scoped>
.vue-container{
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  height: 210px;
  border-style: groove;
  border-color: grey;
  background-color: white;
}
.el-scroller{
  height: 94%;
}
.tool-eltabs{
  width: 100%;
}
.tool-ins{
  background-color: #409EFF;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  height: 38px;
  border-radius: 0 0 4px 4px;
}
.tool-name{
  color: white;
  line-height: 38px;
}
.basic-tool{
  display: flex;
  flex-direction: row;
  width: 230px;
}
.h-dropdown{
  display: flex;
  flex-direction: column;
  color: #409EFF;
  padding: 12px 20px;
}
.div-btn,.h-dropdown,.p-btn,.btn-btn,.nav-btn{
  width: 10px;
}
.btn-wrapper{
  width: 32px;
}
</style>
