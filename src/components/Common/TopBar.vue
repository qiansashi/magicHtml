<template>
  <div class="vue-container">
    <div class="topbar-wrapper" :style="style">
      <Setup class="setup">
        <div class="user-welcome">{{lastLoginTime}}</div>
      </Setup>
      <!-- <div class="logo-img">
        <el-image class="logo-front" :src='logoFrontSrc'></el-image>
        <el-image class="logo-rear" :src='logoRearSrc'></el-image>
      </div> -->
      <div class="edit-btn">
        <div class="do-btn">
          <el-button class="redo-btn" type="primary" size="small"><i class="el-icon-back"/>撤销</el-button>
          <el-button class="undo-btn" type="primary" size="small"><i class="el-icon-right"/>重做</el-button>
        </div>
        <el-button class="generate-btn" type="text" @click="dialogTableVisible2 = true">
          <i class="el-icon-upload">新建</i>
        </el-button>
        <el-dialog :title="fileName" :visible.sync="dialogTableVisible2" width="20%">
          <el-form ref="form" :model="form" :rules="rules" label-position="top">
            <el-form-item label="新建文件名称" prop="fileName">
              <el-input v-model="form.fileName"></el-input>
            </el-form-item>
            <el-form-item label="文件类型">
              <el-select v-model="form.fileType" placeholder="选择文件类型">
                <el-option label=".txt" value=".txt"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
           <div slot="footer" class="dialog-footer">
             <el-button @click="confirmSave();dialogTableVisible2=false" type="primary">保存</el-button>
           </div>
        </el-dialog>
        <el-button class="file-btn" type="text" @click="dialogTableVisible = true;getFileData()">
          <i class="el-icon-folder-opened">用户文件</i>
        </el-button>
        <el-dialog :title="userName" :visible.sync="dialogTableVisible">
          <el-table :data="fileData">
            <el-table-column property="file_id" label="文件id" width="150"></el-table-column>
            <el-table-column property="name" label="文件名" width="200"></el-table-column>
            <el-table-column property="location_url" label="文件地址"></el-table-column>
            <el-table-column property="create_time" label="创建时间"></el-table-column>
            <el-table-column label="" width="65">
              <template slot-scope="scope">
                <el-button type="primary" size="small" @click="readFile(scope.row)">修改</el-button>
              </template>
            </el-table-column>
            <el-table-column label="" width="65">
              <template slot-scope="scope">
                <el-button type="success" size="small" @click="saveFile(scope.row)">保存</el-button>
              </template>
            </el-table-column>
            <el-table-column label="" width="65">
              <template slot-scope="scope">
                <el-button type="danger" size="small" @click="deleteFile(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-dialog>
        <div class="user-avatar">
          <el-button type="text" class="login-avatar">
            <el-avatar icon="el-icon-user-solid"
            :src="avatarUrl"></el-avatar>
          </el-button>
          <el-button type="text" class="log-out">注销</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Setup from '../Setup/Setup'
import api from '@/api/api'
export default {
  name: 'TopBar',
  data () {
    return {
      style: '',
      root: '',
      dialogTableVisible: false,
      dialogTableVisible2: false,
      fileData: [],
      rules: {
        fileName: [
          {required: true, message: '请输入文件名', trigger: 'blur'},
          {min: 3, message: '不得低于3个字符', trigger: 'blur'}
        ]
      },
      form: {
        fileName: '',
        fileType: ''
      }

      // style: 'background: -webkit-linear-gradient(left, #000000, #A8A7A3); /* Safari 5.1 - 6.0 */ background: -o-linear-gradient(right, #000000, #A8A7A3); /* Opera 11.1 - 12.0 */ background: -moz-linear-gradient(right, #000000, #A8A7A3); /* Firefox 3.6 - 15 */ background: linear-gradient(to right, #000000, #A8A7A3); /* 标准的语法（必须放在最后） */',
      // logoFrontSrc: require('@/assets/img/magic_white.png'),
      // logoRearSrc: require('@/assets/img/html_black.png')
      // avatarUrl: localStorage.getItem('userInfo')[0].avatar
      // avatarUrl: 'http://106.15.3.156:10256/20210122103751.jpg'
    }
  },
  components: {Setup},
  mounted () {
    this.root = api.rootUrl
  },
  methods: {
    getFileData () {
      let root = this.root
      this.axios.get(root + 'file/index').then((res) => {
        let call = res.data
        console.log(call)
        if (res.data.errno === 0) {
          console.log(res.data.data)
          this.fileData = res.data.data
        } else {
          this.$message({
            type: 'error',
            message: call.errmsg
          })
          return false
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    readFile (row) {
      console.log(row.file_id)
      let fileId = row.file_id
      let root = this.root
      this.axios.get(root + 'file/readFile', {
        params: {
          fileId: fileId
        }
      }).then((res) => {
        let call = res.data
        console.log(call)
        if (res.data.errno === 0) {
          // 此处后期将进行优化
          // eslint-disable-next-line no-eval
          let jsonFile = eval('(' + res.data.data.file + ')')
          console.log(jsonFile)
          this.$store.commit('mutationsAddDiv', jsonFile)
        } else {
          this.$message({
            type: 'error',
            message: call.errmsg
          })
          return false
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    saveFile (row) {
      console.log(row)
      let root = this.root
      // let id = this.$store.state.nodeData.id
      // let label = this.$store.state.nodeData.label
      // let text = this.$store.state.nodeData.text
      // let style = this.$store.state.nodeData.style
      // let labelClass = this.$store.state.nodeData.labelClass
      // let children = this.$store.state.nodeData.children
      // const node = {
      //   id: id,
      //   label: label,
      //   text: text,
      //   style: style,
      //   labelClass: labelClass,
      //   children: children
      // }
      this.axios.post(root + 'file/saveFile', {
        fileId: row.file_id,
        fileData: JSON.stringify(this.$store.state.nodeData)
      }).then((res) => {
        let call = res.data
        console.log(call)
        if (res.data.errno === 0) {
          console.log(res.data.data)
          this.$message({
            type: 'success',
            message: '保存成功！'
          })
        } else {
          this.$message({
            type: 'error',
            message: call.errmsg
          })
          return false
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    deleteFile (row) {
      console.log(row)
      let root = this.root
      this.axios.get(root + 'file/deleteFile', {
        params: {
          fileId: row.file_id
        }
      }).then((res) => {
        let call = res.data
        console.log(call)
        if (res.data.errno === 0) {
          console.log(res.data.data)
          this.$message({
            type: 'success',
            message: '删除成功！'
          })
          this.axios.get(root + 'file/index').then((res) => {
            let call = res.data
            console.log(call)
            if (res.data.errno === 0) {
              console.log(res.data.data)
              this.fileData = res.data.data
            } else {
              this.$message({
                type: 'error',
                message: call.errmsg
              })
              return false
            }
          }).catch((err) => {
            console.log(err)
          })
        } else {
          this.$message({
            type: 'error',
            message: call.errmsg
          })
          return false
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    confirmSave () {
      let root = this.root
      this.axios.post(root + 'file/newFile', {
        fileName: this.form.fileName + this.form.fileType,
        fileData: JSON.stringify(this.$store.state.nodeData)
      }).then((res) => {
        let call = res.data
        console.log(call)
        if (res.data.errno === 0) {
          console.log(res.data.data)
          this.$message({
            type: 'success',
            message: '保存成功！'
          })
        } else {
          this.$message({
            type: 'error',
            message: call.errmsg
          })
          return false
        }
      }).catch((err) => {
        console.log(err)
      })
    }

  },
  computed: {
    avatarUrl () {
      let avatar = this.$store.state.userInfo.avatar
      return avatar
    },
    lastLoginTime () {
      let userInfo = this.$store.getters.getLoginTime()
      return (userInfo.userWelcome + '\n' + (userInfo.lastTime || ''))
    },
    userName () {
      return (this.$store.state.userInfo.name !== undefined) ? (this.$store.state.userInfo.name + '的用户文件') : ('请先登录')
    },
    fileName () {
      return (this.$store.state.userInfo.name !== undefined) ? ('新建文件保存') : ('请先登录')
    }
  }
}
</script>

<style scoped>
.topbar-wrapper{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.1);
}
.setup{
  width: 50px;
}
.logo-front,.logo-rear{
  width: 95px;
}
.edit-btn{
  line-height: 60px;
  display: flex;
}
.do-btn{
  margin-right: 20px;
}
.user-welcome{
  width: 370px;
  font-size: smaller;
  text-align: initial;
}
.user-avatar{
  display: flex;
}
.login-avatar{
  margin-left: 15px;
  margin-right: 2px;
}
.generate-btn{
  margin-right: 12px;
}
.log-out{
  margin-right: 20px;
}
</style>
