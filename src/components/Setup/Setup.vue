<template>
    <div class="setup-template">
        <el-dropdown :visible-change='false' :hide-on-click='false'>
            <i class="el-icon-setting setup-icon" />
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-s-opportunity">日间模式
                    <el-switch v-model="modeSwitchValue" active-color="#333331" inactive-color="#B5B4B0"></el-switch>
                </el-dropdown-item>
                <el-dropdown-item icon="el-icon-s-platform">新手指南</el-dropdown-item>
                <el-dropdown-item icon="el-icon-share">分享</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <div class="slot">
          <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Setup',
  data () {
    return {
      modeSwitchValue: true
    }
  },
  components: {},
  mounted () {},
  methods: {}
}
</script>

<style scoped>
.setup-icon{
    font-size: 25px;
    padding: 18px;
    margin-left: 22px;
}
.setup-template{
  display: flex;
}
.slot{
  width: 370px;
  line-height: 60px;
}
</style>
