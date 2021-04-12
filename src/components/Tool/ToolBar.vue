<template>
  <div class="vue-container">
    <div class="tool-ins">
      <span class="tool-name">工具栏</span>
    </div>
    <el-scrollbar class="scroller">
      <el-tabs class="tool-eltabs" type="card" v-model="firstName" @tab-click="tapClick">
        <el-tab-pane class="basic-tool" label="html基础组件" name="basicTool">
          <el-button class="div-btn" type="text" @click="divClick">div</el-button>
          <el-button class="nav-btn" type="text" @click="navClick">nav</el-button>

        </el-tab-pane>
        <el-tab-pane class="bootstrap-tool" label="Bootstrap组件" name="bootstrapTool">
           <el-button class="com-btn" type="text" @click="comClick">com</el-button>
        </el-tab-pane>
        <el-tab-pane class="bootstrap-css" label="Bootstrap布局" name="bootstrapCss">Bootstrap布局</el-tab-pane>
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
      firstName: 'basicTool'
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
    },
    navClick () {
      this.$store.commit('mutationsNewNode', addNavModel(increaseNodeId(this.$store.state.nodeData, this.$store.state.selectedData.id)))
    },
    comClick () {
      this.$store.commit('mutationsNewNode', addComponentModel(increaseNodeId(this.$store.state.nodeData, this.$store.state.selectedData.id)))
    }
  },
  computed: {}
}
</script>

<style scoped>
.vue-container{
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  height: 260px;
  border-style: groove;
  border-color: grey;
}
.scroller{
  height: 94%;
}
.tool-eltabs{
  width: 100%;
}
.tool-ins{
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  height: 38px;
  border-radius: 0 0 25px 25px;
}
.tool-name{
  line-height: 38px;
}
.basic-tool{
  display: flex;
  flex-direction: column;
}
</style>
