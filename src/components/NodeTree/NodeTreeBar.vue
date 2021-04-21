<template>
  <div class="vue-container">
    <div class="node-ins">
      <span class="node-name">节点树</span>
    </div>
    <div class="node-tree-wrapper">
      <el-input placeholder="请输入标签名" v-model="filterText"></el-input>
      <el-scrollbar class="scroller">
        <el-tree :data="nodeData"
        :show-checkbox="showCheckBox"
        node-key="id"
        :default-expand-all="defaultExpandAll"
        :expand-on-click-node="expandOnClickNode"
        :highlight-current="highlightCurrent"
        :check-strictly="checkStrictly"
        :filter-node-method="filterNode"
        @node-click="handleNodeClick"
        :newNode="newNode"
        ref="tree">
          <span class="node-tree" slot-scope="{ node, data }">
            <i class="el-icon-price-tag"></i>
            <span class="node-tag">{{node.label}}</span>
            <span class="label-class">{{data.labelClass}}</span>
            <el-button class="node-add-btn"
            type="text"
            size="mini"
            @click="addNode(node,data)">修改</el-button>
            <el-button class="node-delete-btn"
            v-if="showDelete >= 1"
            type="danger"
            size="mini"
            @click="deleteNode(node,data)"
            icon="el-icon-delete"
            circle></el-button>
          </span>
        </el-tree>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import './NodeTreeBar.css'
import {increaseNodeId, pushChildren} from '../../vuex/node'
export default {
  name: '',
  data () {
    return {
      showCheckBox: false,
      defaultExpandAll: true,
      expandOnClickNode: false,
      highlightCurrent: true,
      checkStrictly: true,
      filterText: '',
      showDelete: 0,
      selected: false
      // nodeData: this.$store.state.data
    }
  },
  components: {},
  mounted () {},
  computed: {
    nodeData () {
      return this.$store.state.nodeData
    },
    newNode () {
      return this.$store.state.newNode
    }
  },
  watch: {
    filterText (val) {
      this.$refs.tree.filter(val)
    }
  },
  methods: {
    deleteNode (node, data) {
      const children = node.parent.data.children || node.parent.data
      console.log(children)
      const index = children.findIndex(childrenArray => childrenArray.id === data.id)
      children.splice(index, 1)
      this.$store.commit('mutationsJs2Html', this.$store.state.nodeData)
      var id = increaseNodeId(this.nodeData, this.nodeData[0].id)
      this.showDelete = id - 1
    },
    addNode (node, data) {
      var _this = this
      if (_this.$store.state.styleStatus) {
        let newStyle = _this.$store.state.newStyleNode
        data.labelClass = newStyle.labelClass
        data.style = newStyle.style
        data.text = newStyle.text
      } else {
        if (!_this.selected) {
          _this.$refs.tree.setCheckedKeys([data.id])
          _this.$notify({
            title: '节点修改',
            message: data.label + ' class:' + data.labelClass + '被修改~',
            duration: 2000,
            position: 'bottom-left'
          })
          // if (!data.children) {
          //   this.$set(data, 'children', [])
          // }
          console.log(data)
          console.log(node.parent)
          // if (node.parent.data.children === []) {
          //   _this.newNode.id = node.parent.id++
          // } else {
          //   console.log(node.parent.id)
          //   _this.newNode.id = data.id++
          // }
          console.log(_this.newNode.id)
          // let tempNode = _this.newNode
          console.log(_this.nodeData[0].id)
          let id = increaseNodeId(_this.nodeData, _this.nodeData[0].id)
          console.log(id)
          let label = _this.newNode.label
          let text = _this.newNode.text
          let style = _this.newNode.style
          let labelClass = _this.newNode.labelClass
          // let children = _this.newNode.children
          this.showDelete = id
          const newChild = {
            id: id++,
            label: label,
            text: text,
            style: style,
            labelClass: labelClass,
            children: []
          }

          data.children.push(newChild)
          // data.text = 'hhhhhh'
          _this.$store.commit('mutationsAddDiv', this.$store.state.nodeData)
          _this.$store.commit('mutationsJs2Html', this.$store.state.nodeData)
          // _this.$store.commit('mutationsSelectedNode', node)
          _this.$store.commit('mutationsSelectedData', data)
          pushChildren(_this.newNode.children, data, _this)
        } else {

        }
      }
    },
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    handleNodeClick () {

    }
  }
}
</script>

<style scoped>
.vue-container{
  height: 74%;
  border-style: groove;
  border-color: grey;
  background-color: white;
}
.node-tree-wrapper{
  height: 92%;
  margin-top: 3px;
}
.scroller .el-scrollbar__wrap {
  overflow-x: hidden
}
.scroller{
  height: 100%;
}
.node-ins{
  background-color: #409EFF;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  height: 38px;
  border-radius: 0 0 4px 4px;
}
.node-name{
  color: white;
  line-height: 38px;
}
.node-delete-btn{
  padding: 0;
  width: 18px;
  height: 18px;
  margin-left: 8px;
}
.el-icon-price-tag{
  font-size: 10px;
}
.node-tag{
  color:#409EFF;
}
.label-class{
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size:10px;

}
</style>
