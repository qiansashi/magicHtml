<!--  -->
<template>
    <div class="login">
        <div class="login-box">
            <div class="logo">
                <img src="@/assets/img/magic_black.png"/>
                <img src="@/assets/img/html_white.png"/>
            </div>
            <div class="body">
              <p class="tips">html网页可视化编辑系统</p>
              <el-form ref="form" :model="form" :rules="rules" label-position="top">
                <el-form-item label="" prop="username">
                  <el-input v-model="form.username" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item label="" prop="password">
                    <el-input type="password" v-model="form.password" placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item :class="isShow" label="" prop="passwordCheck">
                    <el-input type="password" v-model="form.passwordCheck" placeholder="再次输入密码" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item :class="isShow" label="" >
                    <el-upload class="avatar-uploader"
                    :action="postUrl"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                      <img v-if="imageUrl" :src="imageUrl" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item>
                  <el-button :class="isHiden" type="primary" @click="startLogin" :loading="loading" style="width: 100%;">
                    {{ loading ? '登录中...' : '登录' }}
                  </el-button>
                  <div></div>
                  <el-button :class="isShow" class="regist" type="primary" @click="registLogin" :loading="loading" style="width: 100%;">
                    {{ loading ? '注册中...' : '注册' }}
                  </el-button>
                  <div class="register-btn">
                    <el-button  type="text" @click="goRegist = !goRegist">{{registTxt}}</el-button>
                    <el-tooltip effect="dark" content="一个html网页可视化编辑系统，如在注册过程中遇到问题请联系作者~" placement="bottom-end">
                      <el-button type="text"><i class="el-icon-question"></i></el-button>
                    </el-tooltip>
                  </div>
                </el-form-item>
              </el-form>
              <p style="font-size:10px">Copyright © 021117111 董一帆 毕业设计作品</p>
            </div>
        </div>
    </div>
</template>
<script>
import api from '@/api/api'

export default {
  data () {
    var pwdCheck = (rule, value, callback) => {
      if (value === '' && this.goRegist) {
        callback(new Error('请再次输入密码!'))
      } else if (value !== this.form.password && this.goRegist) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      root: '',
      form: {
        username: '',
        password: '',
        avatar: ''
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 6, message: '密码不得低于6个字符', trigger: 'blur'}
        ],
        passwordCheck: [
          {validator: pwdCheck, trigger: 'blur'},
          {min: 6, message: '密码不得低于6个字符', trigger: 'blur'}
        ]
      },
      loading: false,
      goRegist: false,
      postUrl: '',
      imageUrl: ''
    }
  },
  components: {},
  methods: {
    startLogin () {
      this.$refs['form'].validate((valid) => {
        if (!valid) {
          return false
        }
        this.loading = true
        let root = this.root
        this.axios.post(root + 'login/index', {
          username: this.form.username,
          password: this.form.password
        }).then((res) => {
          let call = res.data
          console.log(call)
          this.loading = false
          if (res.data.errno === 0) {
            console.log(res.data.data)
            localStorage.setItem('token', res.data.data.token)
            this.$store.commit('mutationsUserInfo', res.data.data.userInfo)
            localStorage.setItem('userInfo', JSON.stringify(res.data.data.userInfo))
            console.log(JSON.stringify(res.data.data.token))
            console.log(JSON.stringify(res.data.data.userInfo))
            this.$router.push({name: 'dashboardPage'})
            let sUserAgent = navigator.userAgent
            // 手机端暂时还没写
            let mobileAgents = ['Android', 'iPhone', 'Symbian', 'WindowsPhone', 'iPod', 'BlackBerry', 'Windows CE']
            let goUrl = 0
            for (var i = 0; i < mobileAgents.length; i++) {
              if (sUserAgent.indexOf(mobileAgents[i]) > -1) {
                goUrl = 1
                break
              }
            }
            console.log(goUrl)
            if (goUrl === 1) {
              this.$router.push({name: 'dashboardPage'})
            }
          } else {
            this.$message({
              type: 'error',
              message: call.errmsg
            })
            return false
          }
        }).catch((err) => {
          this.loading = false
          console.log(err)
        })
      })
    },
    beforeAvatarUpload (file) {
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isLt2M
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
      console.log(res)
      this.form.avatar = res.data.img_url
    },
    registLogin () {
      this.$refs['form'].validate((valid) => {
        if (!valid) {
          return false
        }
        this.loading = true
        let root = this.root
        this.axios.post(root + 'login/register', {
          username: this.form.username,
          password: this.form.password,
          avatar: this.form.avatar
        }).then((res) => {
          let call = res.data
          console.log(call)
          this.loading = false
          if (res.data.errno === 0) {
            console.log(res.data.data)
            localStorage.setItem('token', res.data.data.token)
            this.$store.commit('mutationsUserInfo', res.data.data.userInfo)
            localStorage.setItem('userInfo', JSON.stringify(res.data.data.userInfo))
            console.log(JSON.stringify(res.data.data.token))
            console.log(JSON.stringify(res.data.data.userInfo))
            this.$message({
              message: res.data.data.status
            })
            this.$router.push({name: 'dashboardPage'})
            let sUserAgent = navigator.userAgent
            // 手机端暂时还没写
            let mobileAgents = ['Android', 'iPhone', 'Symbian', 'WindowsPhone', 'iPod', 'BlackBerry', 'Windows CE']
            let goUrl = 0
            for (var i = 0; i < mobileAgents.length; i++) {
              if (sUserAgent.indexOf(mobileAgents[i]) > -1) {
                goUrl = 1
                break
              }
            }
            console.log(goUrl)
            if (goUrl === 1) {
              this.$router.push({name: 'dashboardPage'})
            }
          } else {
            this.$message({
              type: 'error',
              message: call.errmsg
            })
            return false
          }
        }).catch((err) => {
          this.loading = false
          console.log(err)
        })
      })
    }
  },
  mounted () {
    this.root = api.rootUrl
    this.postUrl = api.rootUrl + 'login/uploadAvatar'
  },
  computed: {
    isHiden () {
      return {goRegist: this.goRegist}
    },
    isShow () {
      return {goRegist: !this.goRegist}
    },
    registTxt () {
      return (this.goRegist !== true) ? ('注册账户') : ('已注册？请登录')
    }
  }
}
</script>
<style>
.login {
  align-items: center;
  background: url("http://www.yfspecialweb.cn:10255/bg.png");
  background-size: 100%;
  background-repeat:no-repeat;
  display: flex;
  font-family: Lato, Helvetica, sans-serif;
  justify-content: center;
  text-align: center;
  height: 100%;
  width: 100%;
  color: #656565;
}

.login-box {
  width: 320px;
  background: #fff;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 12px #ccc;
}

.login-box .logo {
  height: 100px;
  padding-top: 30px;
  /*background: #324157;*/
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-box .logo img {
  width:118px;
}

.login-box .body {
  padding:10px 30px 30px 30px;
}

.login-box .body .tips {
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 30px;
}

.login-box .body .author {
  display: block;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #656565;
  margin-bottom: 10px;
  text-decoration: none;
}

.login-box .body .author a {
  text-decoration: none;
}
.register-btn{
  width: 100%;
  margin-top:5px;
}
.register-btn button{
  float: right;
  font-size: 10px;
}
.el-icon-question{
  color: #606266;
}
.regist{
  margin-top: 5px;
}
.goRegist{
  display: none;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 45px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  }
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 85px;
  height: 85px;
  line-height: 85px;
  text-align: center;
}
.avatar {
  width: 85px;
  height: 85px;
  display: block;
}
</style>
