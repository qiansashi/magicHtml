<template>
  <div class="vue-container">
    <div class="style-ins">
      <div class="style-btn">
        <span class="style-name">样式表</span>
        <el-switch
          v-model="styleGenerate"
          active-color="#13ce66"
          inactive-color="#ff4949"
          @change="getStyleStatus">
        </el-switch>
      </div>
      <div class="line"></div>
    </div>
    <div class="box-shadow-wrapper">
      <el-form ref="form" :model="form" :rules="rules" label-position="top">
        <el-form-item label="" prop="text">
          <el-input v-model="form.text" placeholder="属性" @change="changeStyle"></el-input>
        </el-form-item>
        <el-form-item label="" prop="labelClass">
          <el-input v-model="form.labelClass" placeholder="类名" @change="changeStyle"></el-input>
        </el-form-item>
        <el-form-item label="" prop="style">
          <el-input v-model="form.style" placeholder="手动输入样式" @change="changeStyle"></el-input>
        </el-form-item>
        <el-form-item label="字体大小" prop="fontSize">
          <el-slider v-model="form.fontSize" :format-tooltip="formatTooltip" @change="changeStyle"></el-slider>
        </el-form-item>
        <el-form-item label="字体颜色" prop="fontColor">
          <el-color-picker v-model="form.fontColor" @change="changeStyle"></el-color-picker>
        </el-form-item>
        <el-form-item label="背景色" prop="bgColor">
          <el-color-picker v-model="form.bgColor" @change="changeStyle"></el-color-picker>
        </el-form-item>
        <el-form-item label="边框" prop="border">
          <el-slider v-model="form.border" :format-tooltip="formatTooltip" @change="changeStyle"></el-slider>
        </el-form-item>
        <el-form-item label="内边距" prop="padding">
          <el-slider v-model="form.padding" :format-tooltip="formatTooltip" @change="changeStyle"></el-slider>
        </el-form-item>
        <el-form-item label="外边距" prop="margin">
          <el-slider v-model="form.margin" :format-tooltip="formatTooltip" @change="changeStyle"></el-slider>
        </el-form-item>

      </el-form>
    </div>
    <div class="style-wrapper"></div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      styleGenerate: false,
      form: {
        text: '',
        labelClass: '',
        style: '',
        fontSize: 0,
        fontColor: null,
        bgColor: null,
        border: 0,
        padding: 0,
        margin: 0
      },
      rules: {

      }
    }
  },
  components: {},
  mounted () {},
  methods: {
    getStyleStatus (status) {
      if (status) {
        this.$message('切换至样式修改')
        let newStyleNode = {
          text: this.form.text,
          style: this.form.style + ';' + 'font-size:' + this.form.fontSize + 'px;' + 'color:' + this.form.fontColor + ';' + 'background-color:' + this.form.bgColor + ';' + 'border:' + this.form.border + 'px;' + 'padding:' + this.form.padding + 'px;' + 'margin:' + this.form.margin + 'px;',
          labelClass: this.form.labelClass
        }
        this.$store.commit('mutationsStyle', newStyleNode)
      }
      this.$store.commit('mutationsStyleStatus', status)
    },
    formatTooltip (val) {
      return (val + ' px')
    },
    changeStyle () {
      if (this.$store.state.styleStatus) {
        let newStyleNode = {
          text: this.form.text,
          style: this.form.style + ';' + 'font-size:' + this.form.fontSize + 'px;' + 'color:' + this.form.fontColor + ';' + 'background-color:' + this.form.bgColor + ';' + 'border:' + this.form.border + 'px;' + 'padding:' + this.form.padding + 'px;' + 'margin:' + this.form.margin + 'px;',
          labelClass: this.form.labelClass
        }
        this.$store.commit('mutationsStyle', newStyleNode)
      }
    }
  }
}
</script>

<style scoped>
.vue-container{
  width: 11%;
  height: 100%;
  border-style: groove;
  border-color: grey;
  display: flex;
  flex-direction: column;
}
.style-ins{
  height: 38px;
  background-color: #f5f7f9;
  display: flex;
  flex-direction: column;
  padding: 8px;
}
.line{
  margin: 21px 0;
  border-top: 1px solid #d1dbe5;
}
.box-shadow-wrapper{
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  width: 90%;
  height: 90%;
  margin: 30px 10px 0 10px;
  border-radius: 4px;
  padding: 15px;
}
.style-btn{
  justify-content: space-between;
  display: flex;
}
.el-form-item{
  margin-bottom: 5px;
}
.el-form--label-top .el-form-item__label{
  padding: 0;
}
</style>
